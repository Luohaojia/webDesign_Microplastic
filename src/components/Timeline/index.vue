<template>
  <div id="Timeline">
    <div class="timeLine">
      <div class="box">
        <div class="left"></div>
        <div class="center"><span> 1995年 </span></div>
        <div class="right">
          <div class="title">《中华人民共和国固体废物环境防治法》</div>
          <article>
            <p>规范固体废物污染环境，促进经济社会可持续发展</p>
          </article>
        </div>
      </div>

      <div class="box">
        <div class="left">
          <div class="title">《关于加强重点交通干线、流域及旅游景区塑料包装废弃物管理的若干意见》</div>
          <article>
            <p>防止塑料包装废弃物在河流、湖泊及沿岸堆积</p>
          </article>
        </div>
        <div class="center"><span> 1999年 </span></div>
        <div class="right"></div>
      </div>

      <div class="box">
        <div class="left"></div>
        <div class="center"><span> 2007年 </span></div>
        <div class="right">
          <div class="title">《国务院办公厅关于限制生产销售使用塑料购物袋的通知》</div>
          <article>
            <p>规定商品零售场所不得免费提供塑料购物袋</p>
          </article>
        </div>
      </div>

      <div class="box">
        <div class="left">
          <div class="title">《关于进一步加强塑料污染的意见》</div>
          <article>
            <p>提出要有序禁止、限制部分塑料制品的生产、销售和使用，推广替代品</p>
          </article>
        </div>
        <div class="center"><span> 2020年 </span></div>
        <div class="right"></div>
      </div>

      <div class="box">
        <div class="left"></div>
        <div class="center"><span> 2021年</span></div>
        <div class="right">
          <div class="title">《“十四五”塑料污染治理行动方案》</div>
          <article>
            <p>完善塑料污染全链条治理体系，进一步细化了塑料使用源头减量</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Timeline',
  data: function () {
    return {}
  }
}
</script>
<style scoped lang="less">
.timeLine {
  width: 770px;
  position: relative;
  color: black;
  margin: 0 auto;
  // top: -50px;
  .box {
    position: relative;
    width: 100%;
    height: 120px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      position: relative;
      width: 40%;
      height: 120px;
      border-radius: 15px;
      text-align: center;
      /* background-color: rgba(255,255,255,.5); */
    }
    .center {
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      z-index: 1;
    }
    .center > span {
      width: 120px;
      border-radius: 10px;
      text-align: center;
      font: 900 24px '';
      line-height: 50px;
      background-color: rgb(160, 190, 230);
    }
    .title {
      background-color: rgb(160, 190, 230);
      padding: 10px;
      z-index: -1;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    article {
      background-color: #fff;
      padding: 10px;
    }
  }
  //线
  &:after {
    content: '';
    position: absolute;
    top: -50px;
    left: 50%;
    width: 5px;
    // z-index: -999;
    height: 900px;
    background-color: rgba(33, 31, 31, 0.42);
  }
}
.box:nth-child(even) .left {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.box:nth-child(odd) .right {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
