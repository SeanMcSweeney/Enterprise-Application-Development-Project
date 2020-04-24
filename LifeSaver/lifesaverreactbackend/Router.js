const bcrypt = require('bcrypt');

/* If SQL database is located at server side, React.js have nothing to do with SQL injection attacks because React.js is outside of SQL database server trust boundary */

class Router {

    constructor(app, db){
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
        this.register(app, db);
        this.changepwd(app, db);
        this.aboutme(app, db);
        this.grabuser(app, db);
        this.deleteuser(app, db);
        this.edituser(app, db);
    }

    login(app, db){
        app.post('/login', (req, res) => {

            let username = req.body.username;
            let password = req.body.password;
            
            username = username.toLowerCase();

            if(username.length > 12 || password.length > 12) {
                res.json({
                    success: false,
                    msg: 'An error has occured, please try again'
                })
                return;
            }

            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) => {

                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error has occured, please try again'
                    })
                    return;
                }

                if (data && data.length === 1) {

                    bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {

                        if(verified) {

                            req.session.userID = data[0].id;

                            res.json ({
                                success: true,
                                username: data[0].username
                            })
                            
                            return;

                        }

                        else{
                            res.json({
                                success: false,
                                msg: 'Your Username or Password is Invalid'
                            })
                        }

                    });

                }

                else {
                    res.json({
                        success: false,
                        msg: 'Your Username or Password is Invalid'
                    })
                }

            });
        });
    }

    logout(app, db){
        app.post('/logout', (req, res) => {
        
            if(req.session.userID) {

                req.session.destroy();
                res.json({
                    success: true
                })
                return true;               
            }

            else {
                res.json({
                    success: false
                })
                return false;  
            }
        
        });

    }

    grabuser(app, db){
        app.post('/grabuser', function(req, res, next) {
            let cols = [req.body.username];
            db.query('SELECT * FROM user where username = ?', cols, (err, data, fields) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error has occured, please try again'
                    })
                    return;
                }
                else {
                    res.json ({
                        success: true,
                        username: data[0].username,
                        email: data[0].email,
                        aboutme: data[0].aboutme,
                        admin: data[0].admin
                    })

                }
            });
        });
    }

    deleteuser(app, db){

        app.post('/deleteuser', function(req, res, next) {
            let cols = [req.body.username];
            db.query('delete FROM user where username = ? LIMIT 1', cols, (err, data, fields) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error has occured, please try again'
                    })
                    return;
                }
                else {
                    res.json ({
                        success: true,
                    })

                }
            });
        });
    }

    edituser(app, db){

        app.post('/edituser', function(req, res, next) {
            let username = [req.body.username];
            let admin = [req.body.admin];
            let aboutme = [req.body.aboutme];
            let email = [req.body.email];
            db.query('Update user SET admin = "' + admin + '", aboutme = "' + aboutme + '", email = "' + email + '"  WHERE username = ? LIMIT 1', username, (err, data, fields) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error has occured, please try again'
                    })
                    return;
                }
                else {
                    res.json ({
                        success: true,
                    })

                }
            });
        });
    }

    changepwd(app, db){
        app.post('/changepwd', (req, res) => {

            let cols = [req.session.userID];
            let oldpassword = req.body.passwordold;
            let newpassword = req.body.passwordnew;
            let newpasswordencrypted = bcrypt.hashSync(req.body.passwordnew, 9);
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
                    if (data && data.length === 1) {
                    bcrypt.compare(oldpassword, data[0].password, (bcryptErr, verified) => {
                        if(verified) {
                            db.query('Update user SET password = "' + newpasswordencrypted + '" WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
                                if (err) {
                                    res.json({
                                        success: false,
                                        msg: 'An error has occured, please try again'
                                    })
                                    return;
                                }

                                else{
                                    res.json ({
                                        success: true,
                                        msg: 'Your Password has been changed successfully'
                                    })
                                }
                            });

                            return;

                        }

                        else{
                            res.json({
                                success: false,
                                msg: 'Old Password is Invalid'
                            })
                        }
                    });
                }
            });
    });
}

aboutme(app, db){
    app.post('/aboutme', (req, res) => {
        //console.log("enter register ", err);

        let aboutme = req.body.aboutme;
        let cols = [req.session.userID];
        db.query('Update user SET aboutme = "' + aboutme + '" WHERE id = ? LIMIT 1', cols, (err, data, fields) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'An error has occured, please try again'
                })
                return;
            }

            else{
                res.json ({
                    success: true,
                    msg: 'Your About Me has been changed successfully'
                })
            }
        });
    });
}


    isLoggedIn(app, db){
        app.post('/isLoggedIn', (req, res) => {
        
            if (req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', cols, (err, data, fields) => {

                    if (data && data.length === 1) {

                        var admchk = data[0].admin;
                            if(admchk == "yes"){
                                res.json ({
                                    success: true,
                                    username: data[0].username,
                                    aboutme: data[0].aboutme,
                                    admin: data[0].admin
                                })
                            }
                            else{
                                res.json ({
                                    success: true,
                                    username: data[0].username,
                                    aboutme: data[0].aboutme,
                                    admin: "no"
                                })
                            }

                        return true;
                    }

                    else {
                        res.json ({
                            success: false
                        })
                    }
                });
            }

            else {
                res.json ({
                    success: false
                })
            }

        });

    }

    register(app, db){
        app.post('/register', (req, res) => {
            //console.log("enter register ", err);

            let email = req.body.email;
            let passwordencrypted = bcrypt.hashSync(req.body.password, 9);
            let username = req.body.username;
            let admin = "no";
            let aboutme = req.body.aboutme;
            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) => {
                if (data && data.length === 1){
                    res.json({
                        success: false,
                        msg: 'Username already exists'
                    })
                }
                else{
                    db.query('insert into user(username ,password ,email, admin, aboutme) values ("' + username + '","' + passwordencrypted + '","' + email + '","' + admin + '","' + aboutme + '")', (err, data, fields) => {
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'An error has occured, please try again'
                            })
                            console.log("error ", err);
                            return;
                        }
                        res.json ({
                            success: true
                        })
                    });
                }
            });
        });
    }
}

module.exports = Router;