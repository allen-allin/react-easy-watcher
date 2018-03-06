# react-easy-watcher

在react组件中监听`state`的改变，就好像vue中的`watcher`api一样

[English README](README.md)

依赖 [React](https://github.com/facebook/react) 和 [Lodash.isequal](https://lodash.com/).


### 安装  

```
npm install react-easy-watcher --save
```



### 使用

* 将一个组件用高阶组件`watcher`封装一层然后返回
* 要监听`state`变化很简单，在组件的`state`中定义`watch`对象（必须），其他的操作就和`vue`中的[watch](https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8) 一样容易了，该对象的键为组件中想监听的`state`字段，值为一个函数，当要监听的字段发生变化时（支持深度监听），触发这个函数。函数的参数为监听字段的改变前后的值。

```js
import React, { Component } from 'react';
import watcher from 'react-easy-watcher';

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'react-easy-watcher',
            watch: {
                msg(newVal,oldVal) {
                    console.log(newVal,oldVal,this)  
                }
            }
        }
    }
    change() {
        this.setState({
            msg: 'hello world!'
        })
    }
    render() {
        const { msg } = this.state
        return (
            <div>
                <h1>{ msg }</h1>
                <button onClick={this.change.bind(this)}>change</button>
            </div>
        )
    }
}
export default watcher(Hello);
```


## Authors

**zysallen**


## License

MIT
