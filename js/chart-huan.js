$(function(){
    var huan = echarts.init(document.getElementById('chart-huan'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'我的资产',
                type:'pie',
                radius: ['80%', '100%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:0, name:'可用金额',itemStyle:{normal:{color:'#ff9523'}}},
                    {value:0, name:'冻结金额',itemStyle:{normal:{color:'#ffc20f'}}},
                    {value:0, name:'待收本金',itemStyle:{normal:{color:'#20cba0'}}}
                ],
                hoverAnimation: false
            }
        ]
    }
    huan.setOption(option);
});