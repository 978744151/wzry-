$('.d_true').on("click",function(){
        $.ajax({
            url:"http://gok.tc2stgs.com/login/cashrecord",
            type:'GET',
            data:{'page':'1'},
            dataType: 'json',
            success:function(data){
                console.log(data);
            }
    })
})