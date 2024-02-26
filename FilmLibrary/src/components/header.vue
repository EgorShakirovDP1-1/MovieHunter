<template>

 
 
<div id="header">
<h1 id="logo"><img src="css/images/logo.gif"> </h1>
    <div class="social"> <span>FOLLOW US ON:       <ul>
        <li><a class="twitter" href="#">twitter</a></li>
        <li><a class="facebook" href="#">facebook</a></li>
        <li><a class="vimeo" href="#">vimeo</a></li>
        <li><a class="rss" href="#">rss</a></li>
      </ul></span>

    </div>
    <div id="navigation">
      <ul>
        <li><RouterLink class="active" to="/">HOME</RouterLink></li>
        <li><RouterLink to="/login">REGISTRATION</RouterLink></li>
        <li>COMING SOON</li>
        <li>CONTACT</li>
      </ul>
    </div>
    <div id="sub-navigation">
      <ul>
        <li><a href="#">SHOW ALL</a></li>
        <li><a href="#">LATEST TRAILERS</a></li>
        <li><a href="#">TOP RATED</a></li>
        <li><a href="#">MOST COMMENTED</a></li>
      </ul>
      <div id="search">
        <form action="#" method="get" accept-charset="utf-8">
          <label for="search-field">SEARCH</label>
          <input type="search" name="search field" placeholder="Enter search here" id="search-field" class="blink search-field"  />
          <input type="submit" value="GO!" class="search-button" />
        </form>
      </div>
    </div>
</div>

</template>
<script>

export default {
  name: 'NavBar'
};

</script>

<style>


h1#logo {
	position:relative;
	top:37px;
	left:0;
	padding-right: 1000px;

}
h1#logo a {
	float:left;
	width:239px;
	height:49px;
	background:url('images/logo.gif') no-repeat 0 0;
	font-size:0;
	line-height:0;
	text-indent:-4000px;
}
.social {
	float:right;
	width:160px;
	padding-top:11px;
	margin-left:10px
}
.social span {
	float:left;
	display:inline;
	font-size:10px;
	color:#9f9f9f;
	line-height:16px;
	padding-right:5px;

}
.social ul {
	list-style:none;

}
.social ul li {
	float:left;
	display:inline;
	width:16px;
	padding-right:2px;
	margin-right:2px
}
.social ul li a {
	float:left;
	display:inline;
	width:16px;
	height:16px;
	background:url('css/images/social.gif') no-repeat 0 0;
	font-size:0;
	line-height:0;
	text-indent:-4000px;
}
.social ul li a.facebook {
	background-position:-18px 0;
}
.social ul li a.vimeo {
	background-position:-36px 0;
}
.social ul li a.rss {
	background-position:-54px 0;
}
#navigation {
	float:right;
	clear:right;
	padding-top:28px;
	padding-bottom:47px;
}
#navigation ul {
	list-style:none;
}
#navigation ul li {
	float:left;
	display:inline;
	padding-left:29px;
}
#navigation ul li a {
	font-size:14px;
	font-weight:bold;
	color:#fff;
	text-decoration:none;
}
#navigation ul li a.active, #navigation ul li a:hover {
	color:#d91d2a;
}
#sub-navigation {
	display:block;
	clear:right;
	border-top:1px dashed #666;
	border-bottom:1px dashed #666;
	padding:8px 0;
}
#sub-navigation ul {
	list-style:none;
}
#sub-navigation ul li {
	float:left;
	display:inline;
	padding-right:23px;
}
#sub-navigation ul li a {
	font-size:14px;
	font-weight:bold;
	color:#fff;
	line-height:24px;
	text-decoration:none;
}
#sub-navigation ul li a:hover {
	text-decoration:underline;
}
#search {
	width:346px;
	margin:0 0 0 auto;
}
#search label {
	float:left;
	display:inline;
	font-size:14px;
	font-weight:bold;
	color:#fff;
	line-height:24px;
	padding-right:6px;
}
#search .search-field {
	width:238px;
	border:1px solid #413e3e;
	background:#000;
	color:#787878;
	padding:2px 0 2px 2px;
}

h2 {
	font-size:10px;
	color:#f2a223;
	font-weight:bold;
}
h3 {
	font-size:14px;
	color:#fff;
	font-weight:bold;
}
h4 {
	font-size:14px;
	color:#f3b12b;
	font-weight:bold;
}
#search .search-button {
	font-size:14px;
	font-weight:bold;
	border:0;
	background:none;
	color:#fff;
	cursor:pointer;
}
.play {
	background-image:none;
 	filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='css/images/image-hover.png', sizingMethod='image');
}
* {
	margin:0;
	padding:0;
	outline:0;
}
</style>
<script setup>

</script>