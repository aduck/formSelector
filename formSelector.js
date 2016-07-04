// 全选/全不选
window.formSelector=function(){
    // 全选按钮控制
    function _btnCheck(checks,bool){
        if(checks instanceof Array){
            $.each(checks,function(index,item){
                document.getElementById(item).checked=bool;
            })
        }else{
            document.getElementById(item).checked=bool;
        }
    } 
    // 全选/全不选函数
    function selectOrCancal($items,checks,bool){
        // bool为true是全选，bool为false是全不选
        $items.each(function(){
            this.checked=bool;
            _btnCheck(checks,bool);
        })   
    }
    // 实时监测
    function render($items,checks){
        // bool为true是全选，bool为false是全不选
        var checked=true;
        _btnCheck(checks,false);
        $items.each(function(){
            if(!this.checked) checked=false;
        })
        if(checked){
            _btnCheck(checks,true);
        }
    }
    return{
        init:function(items,checks){
            var checked=true;
            items.each(function(){
                if(!this.checked) checked=false;
                $(this).change(function(){
                    render(items,checks);
                })
            })
            _btnCheck(checks,checked);
            if(checks instanceof Array){
                $.each(checks,function(index,item){
                    $('#'+item).change(function(){
                        selectOrCancal(items,checks,this.checked);
                    })
                })
            }else{
                $('#'+item).change(function(){
                    selectOrCancal(items,checks,this.checked);
                })
            }
        }
    }
}();