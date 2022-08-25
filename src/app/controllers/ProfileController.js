const Course = require('../../models/Course');

const { mutiple } = require('../../utils/mongoose');

class ProfileController {
    // [GET] /course/:slug
    get(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([course, count]) =>
                res.render('profile/store', { course: mutiple(course), count }),
            )
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
