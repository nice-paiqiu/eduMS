layui.use('table', function () {
    var table = layui.table;
    table.render({
        elem: '#class-table'
        , height: 'full-120'
        , url: "/myClass"
        , page: true //开启分页
        ,limits:[5,10,20]
        ,limit: 5
        ,cols: [[ //表头
            {field: 'id', title: '班级ID', align: 'center', width: 100, fixed: 'left'}
            , {field: 'name', title: '班级名', align: 'center', width: 250, fixed: 'left'}
            , {field: 'opentime', align: 'center', title: '开班时间', width: 160}
            , {field: 'status', align: 'center', title: '状态', width: 160}
            , {field: 'stage', align: 'center', title: '阶段', width: 160}
            , {field: 'chargeteacher', align: 'center', title: '班主任', width: 160}
            , {field: 'teachteacher', align: 'center', title: '教师', width: 160}
            , {title: '操作', align: 'center', templet: "#classList", width: 200}
        ]]
    });
//列表操作
    table.on('tool(class-table)', function (obj) {
        var layEvent = obj.event,
            data = obj.data;
        if (layEvent == 'edit') {
            layer.open({
                title: '编辑班级信息'
                ,type:2
                ,offset: '0px'
                ,area: ['500px','500px']
                ,content:'/getTeacherByType?cid='+data.id
                ,end:function () {display();}
            });
        }else if(layEvent == 'task'){
            layer.open({
                title: '作业信息'
                ,type:2
                ,area: ['800px', '600px']
                ,content:'/work.html?id='+data.id
            });
        }else if(layEvent == 'stu'){
            console.log(obj.name)
            layer.open({
                //需要得到当前行的class_id
                // title: '班级学生'
                title:obj.name
                ,type:2
                ,area: ['800px', '600px']
                ,content:'/classStudent.html?id='+data.id
            });

        }
    })


})
//    重新加载表格
function display() {
    var flag = document.getElementById("yn").checked;
    layui.use('table', function () {
        var table = layui.table;
        table.reload('class-table', {
            url: "/myClass",
            where: {flag: flag}
        })
    })
}
layui.use('form', function () {
    var form = layui.form;
    //监听提交
});
