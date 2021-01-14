var $ = require('jquery');
require('jquery-validation');

const exam = {};

const ERROR_MESSAGE_REQUIRE = "This field is required"

exam.rules = {
    answers1: {
        required: true
    },
    answers2: {
        required: true
    },
    answers3: {
        required: true
    },
    answers4: {
        required: true
    },
    answers5: {
        required: true
    },
    answers6: {
        required: true
    },
    firstName: {
        required: true
    },
    lastName: {
        required: true
    },
    companyName: {
        required: true
    },
    address1: {
        required: true
    },
    address2: {
        required: true
    },
    address3: {
        required: true
    },
    address4: {
        required: true
    },
    contact: {
        required: true
    }
}

exam.messages = {
    answers1: {
        required: ERROR_MESSAGE_REQUIRE
    },
    answers2: {
        required: ERROR_MESSAGE_REQUIRE
    },
    answers3: {
        required: ERROR_MESSAGE_REQUIRE
    },
    answers4: {
        required: ERROR_MESSAGE_REQUIRE
    },
    answers5: {
        required: ERROR_MESSAGE_REQUIRE
    },
    answers6: {
        required: ERROR_MESSAGE_REQUIRE
    },
    firstName: {
        required: ERROR_MESSAGE_REQUIRE
    },
    lastName: {
        required: ERROR_MESSAGE_REQUIRE
    },
    companyName: {
        required: ERROR_MESSAGE_REQUIRE
    },
    address1: {
        required: ERROR_MESSAGE_REQUIRE
    },
    address2: {
        required: ERROR_MESSAGE_REQUIRE
    },
    address3: {
        required: ERROR_MESSAGE_REQUIRE
    },
    address4: {
        required: ERROR_MESSAGE_REQUIRE
    },
    contact: {
        required: ERROR_MESSAGE_REQUIRE
    }
}
exam.validation = () => {
    $('#form').validate({
        rules: exam.rules,
        messages: exam.messages,
        errorElement: 'span',
        ignore: [],
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        submitHandler: (form) => {
          form.submit();
        },
        onfocusout: (e) => {
            $(e).trigger('keyup')
        },
        onkeyup: function (element) {
            $(element).valid()
            this.checkForm();

        }
    })
}

$(".question-container").on('click', (e) => {
    $(e.currentTarget).parent().find('input').slideToggle("fast");
    $(e.currentTarget).find('.arrow').toggleClass('down');
});

$(window).on('load', () => {
    exam.validation();
})