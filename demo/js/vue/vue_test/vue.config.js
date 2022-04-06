module.exports = {
    lintOnSave: false, //关闭语法检查
    //开启代理服务器(方式1)
    // devServer:{
    //     proxy:"http://localhost:80", //代理服务器的端口号是对端服务器的端口号
    // },
    devServer:{
        proxy:{
            '/api':{
                target:"http://api.m.taobao.com:80",//代理服务器的端口号是对端服务器的端口号
                pathRewrite:{   //路由重写
                    '^/api':''
                },
                ws:true,    //用于支持webSocket
                changeOrigin:true   //
            },
            '/foo':{
                target:"<othe_url>"
            }
        }
    }

}