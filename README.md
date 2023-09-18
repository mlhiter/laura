### 一，框架基本做了什么？

#### 1，响应性（Reactivity）

```html
//without
<p id="cool-para"></p>
<script>
  const coolPara = 'Lorem ipsum.';
  const el = document.getElementById('cool-para');
  el.innerText = coolPara;
</script>

//with（Vue）
<script setup>
  const coolPara = 'Lorem ipsum.';
</script>
<template>
  <p>{{ coolPara }}</p>
</template>

//or（React）
export default function Para() {
  const coolPara = 'Lorem ipsum';
  return <p>{ coolPara }</p>;
}
```

可以看到书写的代码量大大减少，但是这不是主要原因；

主要原因是这将UI和数据绑定组合在一起，我们只需要更改script里的数据即可更新template里的UI显示。

#### 2，组合性（Composability）

```html
//with
<!-- Defining the component -->
<component name="cool-para">
  <p>
    <content />
  </p>
</component>

<!-- Using the component -->
<cool-para>Lorem ipsum.</cool-para>
```

我们可以通过定义组件并且在不同的地方重用它来提高复用率，就像定义函数使用函数一样，但是这是在原始的HTML情况下不具有的。

#### 3，模板化（templating）

Vue中的template和React中的JSX的Component，用来展示的部分就是模板。

为什么称为模板呢，因为它的数据是可变的，其他非数据部分不变，数据部分变就像模板一样喽。

#### 4，虚拟DOM（virtual DOM）

### #参考文章

[Building a Frontend Framework; Reactivity and Composability With Zero Dependencies --- 构建前端框架；零依赖性的反应性和可组合性 (18alan.space)](https://18alan.space/posts/how-hard-is-it-to-build-a-frontend-framework.html)

[Frontend framework --- 前端框架 (mfrachet.github.io)](https://mfrachet.github.io/create-frontend-framework/)