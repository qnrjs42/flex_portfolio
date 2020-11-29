## .child{$}*12 (emmet) 팁

```html
<div class="parent">
    .child{$}*12
</div>

<div class="parent">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
    <div class="child">5</div>
    <div class="child">6</div>
    <div class="child">7</div>
    <div class="child">8</div>
    <div class="child">9</div>
    <div class="child">10</div>
    <div class="child">11</div>
    <div class="child">12</div>
</div>

.child{$}*12

.child : 클래스 이름이 child
{$} : 태그안에 1부터 순차적으로 증가하는 값
*12 : 태그를 12개 생성

즉: child 클래스 이름을 가진 div 태그를 12개를 생성하되 태그안에는 1부터 12까지 값을 입력
```


<br />


---

## justify-content

```css
.parent {
    display: flex;
    border: 5px solid red;
    /* justify-content: center;  */
    /* justify-content: flex-start;  */
    /* justify-content: flex-end; */
    /* justify-content: space-around;  */
    justify-content: space-between; 
    /* justify-content: space-evenly; */
    height: 500px;
}
.child {
    background-color: yellowgreen;
    color: #fff;
    width: 200px;
    /* height: 200px; */
    line-height: 200px;
    text-align: center;
    margin: 5px;
}
```

parent의 height를 500px 주고,
child height를 주지 않으면 auto로 설정 되어
child의 height는 parent의 height에 맞게 설정된다.

즉, parent height 500px이면
child height도 500px

<br />

---


## 부모, 자식 요소 flex 속성

``` css
.parent {
    display: flex;
    justify-content
    align-items
    flex-direction
    flex-wrap
    align-content
}

.child {
    flex
    order
    align-self
}

```css
.parent {
    display: flex;
    display: inline-flex;
}

flex, inline-flex 차이
flex: width를 100% 가짐
inline-flex: width를 자식요소 너비만큼 가짐

```
```


<br />

---

## 수직, 수평 중앙 배치

기존 방식
```css
div {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

flex 방식
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
}
```