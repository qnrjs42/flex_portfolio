
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