# react-easy-watcher

help to wacth state chagnes in react.js,just like the `watcher` api in vue.js.

Requires [React](https://github.com/facebook/react) and [Lodash](https://lodash.com/).


## Install

```
npm install react-easy-watcher
```

## Examples

### Quickstart

Wrap a component to access `watcher` HOC.

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
