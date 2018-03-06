# react-easy-watcher

help to wacth state chagnes in react.js,just like the `watcher` api in vue.js.

[中文 README](README-zh_CN.md)

Requires [React](https://github.com/facebook/react) and [Lodash.isequal](https://lodash.com/).


## Install

```
npm install react-easy-watcher --save
```

## Examples

### Quickstart

* Wrap a component to access `watcher` HOC.

* It is easy to watch `state` changes,you must have an `Object` named `watch` in `this.state` in  your component,then you can watch `state` changes just like using  [watch](https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8) in `vue`.the key of the object is the state you want to watch ,the value of the object is a function, When the field to be watched changes (support for deep listening), trigger this function. The parameters of the function are the values before and after the state changes


```js
import watcher from 'react-easy-watcher';

class Hello extends React.PureComponent {
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
