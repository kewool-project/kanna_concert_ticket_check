<template>
  <div id="guide">
    <p>주의사항: 신분상승 등의 이유로 예매를 취소할 예정이라면 취소를 하고 등록해주세요.</p>
    <textarea v-model="text" readonly></textarea>
    <p>1. 위 텍스트 전체를 복사한다.</p>
    <img src="@/assets/images/guide1.png" />
    <p>2. 티켓링크 로그인을 한 뒤 키보드에 F12 버튼을 누른다.(어느 페이지든 상관없음)</p>
    <img src="@/assets/images/guide2.png" />
    <p>3. 빨간색 동그라미친 부분에 있는 Console 버튼을 누른다. 한글로는 콘솔일 거다.</p>
    <img src="@/assets/images/guide3.png" />
    <p>4. 아까 복사한 텍스트를 붙여넣고 엔터를 누르면 끝</p>
    <p>만약 Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below to allow pasting.</p>
    <p>위 메세지가 뜬다면 붙여넣기 하기 전에 allow pasting이라고 한 번 입력해주세요</p>
  </div>
</template>

<script lang="ts" setup>
const text = ref("const _0x3d6d31=_0x279d;(function(_0x18c6df,_0x419675){const _0x1ff5ae=_0x279d,_0x32e27d=_0x18c6df();while(!![]){try{const _0x5f2f58=parseInt(_0x1ff5ae(0x12e))/0x1*(parseInt(_0x1ff5ae(0x11c))/0x2)+-parseInt(_0x1ff5ae(0x12d))/0x3*(-parseInt(_0x1ff5ae(0x114))/0x4)+parseInt(_0x1ff5ae(0x123))/0x5*(-parseInt(_0x1ff5ae(0x12b))/0x6)+parseInt(_0x1ff5ae(0x117))/0x7+-parseInt(_0x1ff5ae(0x120))/0x8*(parseInt(_0x1ff5ae(0x134))/0x9)+-parseInt(_0x1ff5ae(0x116))/0xa*(-parseInt(_0x1ff5ae(0x12f))/0xb)+-parseInt(_0x1ff5ae(0x115))/0xc;if(_0x5f2f58===_0x419675)break;else _0x32e27d['push'](_0x32e27d['shift']());}catch(_0x48cb76){_0x32e27d['push'](_0x32e27d['shift']());}}}(_0x327a,0xf027f));let data=JSON[_0x3d6d31(0x124)]((await(await fetch(_0x3d6d31(0x11b)))[_0x3d6d31(0x11e)]())[_0x3d6d31(0x133)]('initData')[0x2][_0x3d6d31(0x133)](_0x3d6d31(0x121))[0x1][_0x3d6d31(0x125)](0x0,-0x3)),checksum=_0x3d6d31(0x126),tempStr=checksum,result={'a':data[0x0]['reserveUserName'],'b':[],'checksum':tempStr};result['b'][_0x3d6d31(0x11d)](...await Promise[_0x3d6d31(0x119)](data[_0x3d6d31(0x122)](async _0x532a9e=>{const _0x316716=_0x3d6d31;if(!checksum)return;let _0x4432ad=JSON[_0x316716(0x124)]((await(await fetch('https://www.ticketlink.co.kr/my/reserve/'+_0x532a9e[_0x316716(0x11a)]))[_0x316716(0x11e)]())[_0x316716(0x133)](_0x316716(0x12a))[0x2]['split'](_0x316716(0x121))[0x1][_0x316716(0x125)](0x0,-0x4));if(_0x4432ad[_0x316716(0x127)][_0x316716(0x130)](_0x316716(0x131))&&checksum===_0x316716(0x126))return{'s':_0x4432ad[_0x316716(0x132)],'c':parseInt(_0x532a9e[_0x316716(0x135)]['split']('\x20')[0x4]),'p':_0x532a9e[_0x316716(0x128)]};})));function _0x327a(){const _0x104c63=['40352280HAEFAl','165380xGAPvu','13758696RbmyJB','POST','all','reserveNo','https://www.ticketlink.co.kr/my/reserve/gate/list','1940998tUOPaf','push','text','stringify','622376rzSxjT','\x20=\x20','map','135vcvTCn','parse','slice','b38094d1a794cd6b58679b4377cff2bfda927a5fb595a4361b8c1ec0188033df','productName','placeName','fromCharCode','$scope','22470uTrflr','application/json','5214JZjVaP','2nYfOEB','1045GMvBqs','includes','KANNA','seatNames','split','162lnhWcC','displayProductName','852dqeqdy'];_0x327a=function(){return _0x104c63;};return _0x327a();}let tempChar='k';for(let i of[...tempStr]){tempChar=tempChar^i+0x1;}function _0x279d(_0x371e96,_0x501fed){const _0x327a29=_0x327a();return _0x279d=function(_0x279d63,_0x548a44){_0x279d63=_0x279d63-0x114;let _0x2aec39=_0x327a29[_0x279d63];return _0x2aec39;},_0x279d(_0x371e96,_0x501fed);}let info=[];for(let i of[...JSON['stringify'](result)]){info[_0x3d6d31(0x11d)](String[_0x3d6d31(0x129)](i['charCodeAt'](0x0)^tempChar));}fetch('https://api.kewool.net/ticket',{'method':_0x3d6d31(0x118),'body':JSON[_0x3d6d31(0x11f)](info),'headers':{'Content-Type':_0x3d6d31(0x12c)}});");
</script>

<style lang="scss" scoped>
@import "@/styles/pages/guide/styles.scss";
</style>
