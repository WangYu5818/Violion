$(function () {
    $('form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            cname: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '用户名长度必须在6到18位之间'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: '用户名只能包含大写、小写、数字和下划线'
                    }
                }
            },
            cpwd: {
                        message:'密码无效',
                        validators: {
                            notEmpty: {
                                message: '密码不能为空'
                            },
                            stringLength: {
                                min: 6,
                                max: 30,
                                message: '用户名长度必须在6到30之间'
                            },
                            identical: {//相同
                                field: 'cpwd', //需要进行比较的input name值
                                message: '两次密码不一致'
                            },
                            different: {//不能和用户名相同
                                field: 'cname',//需要进行比较的input name值
                                message: '不能和用户名相同'
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9_\.]+$/,
                                message: '密码格式不正确'
                            }
                        }
                    },
            checked_cpwd: {
                        message: '密码无效',
                        validators: {
                            notEmpty: {
                                message: '用户名不能为空'
                            },
                            stringLength: {
                                min: 6,
                                max: 30,
                                message: '用户名长度必须在6到30之间'
                            },
                            identical: {//相同
                                field: 'cpwd',
                                message: '两次密码不一致'
                            },
                            different: {//不能和用户名相同
                                field: 'cname',
                                message: '不能和用户名相同'
                            },
                            regexp: {//匹配规则
                                regexp: /^[a-zA-Z0-9_\.]+$/,
                                message: '密码格式不正确'
                            }
                        }
                    },
            cphone: {
                message: 'The phone is not valid',
                validators: {
                    notEmpty: {
                        message: '手机号码不能为空'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: '请输入11位手机号码'
                    },
                    regexp: {
                        regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                        message: '请输入正确的手机号码'
                    }
                }
            }

        }
    });
});