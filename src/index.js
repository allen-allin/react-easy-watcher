import React,{Component} from 'react'
import isEqual from 'lodash.isequal'
const watcher = (Comp) => {
    const didUpdate = Comp.prototype.componentDidUpdate
    return class extends Comp {
        componentDidUpdate(props,state) {
            for(let value in this.state.watch) {
                let cb = this.state.watch[value]
                let [newVal,oldVal] = [this.state[value],state[value]]
                if(!isEqual(newVal,oldVal)) {
                    cb.call(this,newVal,oldVal)
                }
            }
            if (didUpdate) {
                didUpdate.call(this, props,state)
            }
        }
        render() {
            return super.render()
        }
    }
}
export default watcher