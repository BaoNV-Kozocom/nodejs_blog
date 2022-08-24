const Course = require('../../models/Course');

const { objectConvert } = require('../../utils/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/detail', { course: objectConvert(course) });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect(`/courses/${course.slug}`))
            .catch(next);
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', { course: objectConvert(course) });
            })
            .catch(next);
    }

    update(req, res, next) {
        Course.findByIdAndUpdate(req.params.id, req.body)
            .then((course) => {
                res.redirect('/profile/courses');
            })
            .catch(next);
    }

    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    force(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
