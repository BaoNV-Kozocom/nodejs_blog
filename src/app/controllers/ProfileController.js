const Course = require('../../models/Course');

const { mutiple } = require('../../utils/mongoose');

class ProfileController {
    // [GET] /course/:slug
    get(req, res, next) {
        Course.find({})
            .then((course) => {
                res.render('profile/store', { course: mutiple(course) });
            })
            .catch(next);
    }

    trash(req, res, next) {
        Course.findDeleted({})
            .then((course) => {
                res.render('profile/trash', { course: mutiple(course) });
            })
            .catch(next);
    }
}

module.exports = new ProfileController();
