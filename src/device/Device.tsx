import * as React from "react";
import "./iphone/style.css";

export class Device extends React.Component {
  render() {
    return (
      <div className="c-view">
        <p id="base" className="nav-title">
          基础案例 :
        </p>
        <p className="green">快速入门和理解mescroll的各项配置</p>
        <a
          className="demo-li"
          href="preview.html?name=list-products"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205320970list-products.gif" />
          </div>
          <p className="demo-title">商品列表</p>
          <p>下拉刷新重置列表数据</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=list-news"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205314004list-news.gif" />
          </div>
          <p className="demo-title">新闻列表</p>
          <p>下拉刷新添加新数据到列表顶部</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=list-mescroll-one"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205310491list-mescroll-one.gif" />
          </div>
          <p className="demo-title">单mescroll</p>
          <p>每次切换菜单都重置列表,不缓存数据</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=list-mescroll-more"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205306072list-mescroll-more.gif" />
          </div>
          <p className="demo-title">多mescroll</p>
          <p>每个菜单列表仅初始化一次,切换菜单缓存数据</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=list-full-lock"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205101076list-full-lock.gif" />
          </div>
          <p className="demo-title">满屏加载与锁定滑动</p>
          <p>自动满屏加载,可临时锁定上拉刷新和下拉加载</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=list-products-vue"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205333637list-products-vue.gif" />
          </div>
          <p className="demo-title">mescroll在vue中的使用</p>
          <p>对, 在vue中使用就是这么的简单 ~</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=list-mescroll-body"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205286594list-mescroll-body.gif" />
          </div>
          <p className="demo-title">body为滚动区域</p>
          <p>无需设置高度,写法简单,适用于无悬浮菜单的界面</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=mescroll-options"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205347926mescroll-options.gif" />
          </div>
          <p className="demo-title">mescroll所有配置项</p>
          <p>源码展示mescroll所有配置项, 快速使用与调试mescroll</p>
        </a>

        <p id="middle" className="nav-title">
          中级案例 :
        </p>
        <p className="green">熟练掌握mescroll自定义下拉刷新和上拉加载的技巧</p>
        <a className="demo-li" href="preview.html?name=sticky" target="_blank">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1512487870668IMG_4195.GIF" />
          </div>
          <p className="demo-title">吸顶悬浮效果</p>
        </a>
        <a className="demo-li" href="preview.html?name=search" target="_blank">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1512835307876IMG_4217.GIF" />
          </div>
          <p className="demo-title">关键词搜索</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=swiper-tap"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1512487862014IMG_4194.GIF" />
          </div>
          <p className="demo-title">轮播切换效果</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=swiper-nav"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1512487862014IMG_4194.GIF" />
          </div>
          <p className="demo-title">轮播导航菜单</p>
        </a>
        <a className="demo-li" href="preview.html?name=zhihu" target="_blank">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508204842656zhihu.gif" />
          </div>
          <p className="demo-title">知乎 v3.53.0</p>
        </a>
        <a className="demo-li" href="preview.html?name=xinlang" target="_blank">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205006290xinlang.gif" />
          </div>
          <p className="demo-title">新浪微博 v7.6.1</p>
        </a>
        <a className="demo-li" href="preview.html?name=beibei" target="_blank">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205298057beibei.gif" />
          </div>
          <p className="demo-title">贝贝 v6.0.0</p>
        </a>
        <a className="demo-li" href="preview.html?name=yabuli" target="_blank">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508204995995yabuli.gif" />
          </div>
          <p className="demo-title">雅布力 v2.4.0</p>
        </a>

        <p id="hight" className="nav-title">
          高级案例 :
        </p>
        <p className="green">充分展示mescroll灵活简单极易拓展的特性</p>
        <a className="demo-li" href="preview.html?name=taobao" target="_blank">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205033359taobao.gif" />
          </div>
          <p id="hight2" className="demo-title">
            淘宝 v6.8.0
          </p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=jingdong"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205090739jingdong.gif" />
          </div>
          <p className="demo-title">京东 v6.1.0</p>
        </a>
        <a className="demo-li" href="preview.html?name=meituan" target="_blank">
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205067956meituan.gif" />
          </div>
          <p className="demo-title">美团 v8.2.3</p>
        </a>
        <a
          className="demo-li"
          href="preview.html?name=meitunmama"
          target="_blank"
        >
          <div className="iPhone">
            <img src="http://oux5x2xxe.bkt.clouddn.com/1508205054953meitunmama.gif" />
          </div>
          <p className="demo-title">美囤妈妈 v2.0.5</p>
        </a>

        <br />
        <br />
        <br />
      </div>
    );
  }
}
