# tingle-on-off [![npm version](https://badge.fury.io/js/tingle-on-off.svg)](http://badge.fury.io/js/tingle-on-off)

开关控件，类似 iPhone 的开关。

<img src="https://img.alicdn.com/tps/TB1dJjWJpXXXXazXFXXXXXXXXXX-750-1254.png" width="375"/>

## Install

```
npm install tingle-on-off --save
```

## Simple Usage

```js
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on1:true,
            on2:false
        }
    }
    handleChange (form,on){
        this.setState({
            [form]:on
        });
    }
    render() {
        return (
            <div>
                <OnOff on={this.state.on1} onChange={this.handleChange.bind(this,"on1")}/>
                <OnOff on={this.state.on2} onChange={this.handleChange.bind(this,"on2")}/>
            </div>
        );
    }
}
```

## Options 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义样式类|
|on|required|-|布尔值，表示当前初始化的时候按钮开或者关的状态|
|onChange|required|-|点击之后的回调函数|


## Links 相关链接

- [Fire a bug/Issues 提Bug](https://github.com/tinglejs/tingle-on-off/issues)
- [Tingle项目](https://github.com/tinglejs/generator-tingle)
