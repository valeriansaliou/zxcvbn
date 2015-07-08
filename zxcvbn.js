(function(){var u,D,E,v,F,G,H,I,J,K,w,q,L,M,N,O;w=function(b,a){return b.push.apply(b,a)};L=function(b,a){var e,c,f,d;d=[];e=0;for(c=a.length;e<c;e++)f=a[e],w(d,f(b));return d.sort(function(b,a){return b.i-a.i||b.j-a.j})};J=function(b,a){var e,c,f,d,g,h,j,k,i,l,n;l=[];d=b.length;h=b.toLowerCase();for(e=f=0;0<=d?f<d:f>d;e=0<=d?++f:--f){c=g=k=e;for(i=d;k<=i?g<i:g>i;c=k<=i?++g:--g)if(h.slice(e,+c+1||9E9)in a)n=h.slice(e,+c+1||9E9),j=a[n],l.push({pattern:"dictionary",i:e,j:c,token:b.slice(e,+c+1||9E9),
matched_word:n,rank:j})}return l};E=function(b){var a,e,c,f,d;f={};a=1;e=0;for(c=b.length;e<c;e++)d=b[e],f[d]=a,a+=1;return f};D=function(b,a){return function(e){var c,f,d;d=J(e,a);e=0;for(c=d.length;e<c;e++)f=d[e],f.dictionary_name=b;return d}};N=function(b,a,e){var c,f,d,g,h,j,k,i,l,n,p,o,m;p=[];for(j=0;j<b.length-1;){k=j+1;l=null;for(o=m=0;;){c=b.charAt(k-1);h=!1;g=-1;f=a[c]||[];if(k<b.length){d=b.charAt(k);i=0;for(n=f.length;i<n;i++)if(c=f[i],g+=1,c&&-1!==c.indexOf(d)){h=!0;1===c.indexOf(d)&&
(o+=1);l!==g&&(m+=1,l=g);break}}if(h)k+=1;else{2<k-j&&p.push({pattern:"spatial",i:j,j:k-1,token:b.slice(j,k),graph:e,turns:m,shifted_count:o});j=k;break}}}return p};u={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",digits:"01234567890"};M=function(b,a){var e,c;c=[];for(e=1;1<=a?e<=a:e>=a;1<=a?++e:--e)c.push(b);return c.join("")};q=function(b,a){var e,c;for(c=[];;){e=b.match(a);if(!e)break;e.i=e.index;e.j=e.index+e[0].length-1;c.push(e);b=b.replace(e[0],M(" ",e[0].length))}return c};
K=/\d{3,}/;O=/19\d\d|200\d|201\d/;I=function(b){var a,e,c,f,d,g,h,j,k,i,l,n,p,o;f=[];p=q(b,/\d{4,8}/);j=0;for(k=p.length;j<k;j++){g=p[j];h=[g.i,g.j];g=h[0];h=h[1];c=b.slice(g,+h+1||9E9);a=c.length;e=[];6>=c.length&&(e.push({daymonth:c.slice(2),year:c.slice(0,2),i:g,j:h}),e.push({daymonth:c.slice(0,a-2),year:c.slice(a-2),i:g,j:h}));6<=c.length&&(e.push({daymonth:c.slice(4),year:c.slice(0,4),i:g,j:h}),e.push({daymonth:c.slice(0,a-4),year:c.slice(a-4),i:g,j:h}));c=[];l=0;for(i=e.length;l<i;l++)switch(a=
e[l],a.daymonth.length){case 2:c.push({day:a.daymonth[0],month:a.daymonth[1],year:a.year,i:a.i,j:a.j});break;case 3:c.push({day:a.daymonth.slice(0,2),month:a.daymonth[2],year:a.year,i:a.i,j:a.j});c.push({day:a.daymonth[0],month:a.daymonth.slice(1,3),year:a.year,i:a.i,j:a.j});break;case 4:c.push({day:a.daymonth.slice(0,2),month:a.daymonth.slice(2,4),year:a.year,i:a.i,j:a.j})}i=0;for(e=c.length;i<e;i++)a=c[i],d=parseInt(a.day),n=parseInt(a.month),o=parseInt(a.year),d=v(d,n,o),l=d[0],o=d[1],d=o[0],n=
o[1],o=o[2],l&&f.push({pattern:"date",i:a.i,j:a.j,token:b.slice(g,+h+1||9E9),separator:"",day:d,month:n,year:o})}return f};G=/(\d{1,2})(\s|-|\/|\\|_|\.)(\d{1,2})\2(19\d{2}|200\d|201\d|\d{2})/;F=/(19\d{2}|200\d|201\d|\d{2})(\s|-|\/|\\|_|\.)(\d{1,2})\2(\d{1,2})/;H=function(b){var a,e,c,f,d,g,h,j,k,i;g=[];j=q(b,G);c=0;for(f=j.length;c<f;c++)d=j[c],k=function(){var b,a,c,f;c=[1,3,4];f=[];a=0;for(b=c.length;a<b;a++)e=c[a],f.push(parseInt(d[e]));return f}(),d.day=k[0],d.month=k[1],d.year=k[2],d.sep=d[2],
g.push(d);j=q(b,F);f=0;for(c=j.length;f<c;f++)d=j[f],k=function(){var b,a,c,f;c=[4,3,1];f=[];a=0;for(b=c.length;a<b;a++)e=c[a],f.push(parseInt(d[e]));return f}(),d.day=k[0],d.month=k[1],d.year=k[2],d.sep=d[2],g.push(d);j=[];f=0;for(c=g.length;f<c;f++)d=g[f],a=v(d.day,d.month,d.year),k=a[0],i=a[1],a=i[0],h=i[1],i=i[2],k&&j.push({pattern:"date",i:d.i,j:d.j,token:b.slice(d.i,+d.j+1||9E9),separator:d.sep,day:a,month:h,year:i});return j};v=function(b,a,e){12<=a&&31>=a&&12>=b&&(a=[a,b],b=a[0],a=a[1]);return 31<
b||12<a||!(1900<=e&&2019>=e)?[!1,[]]:[!0,[b,a,e]]};var P,Q,R,S,x,T,U,V,W,X,Y,Z,$,aa,m,ba,s,ca,y,da,ea,fa;s=function(b,a){var e,c,f;if(a>b)return 0;if(0===a)return 1;for(e=c=f=1;1<=a?c<=a:c>=a;e=1<=a?++c:--c)f*=b,f/=e,b-=1;return f};m=function(b){return Math.log(b)/Math.log(2)};ba=function(b,a){var e,c,f,d,g,h,j,k,i,l,n;c=x(b);n=[];e=[];d=h=0;for(l=b.length;0<=l?h<l:h>l;d=0<=l?++h:--h){n[d]=(n[d-1]||0)+m(c);e[d]=null;k=0;for(j=a.length;k<j;k++)i=a[k],i.j===d&&(g=[i.i,i.j],f=g[0],g=g[1],f=(n[f-1]||
0)+T(i),f<n[g]&&(n[g]=f,e[g]=i))}h=[];for(d=b.length-1;0<=d;)(i=e[d])?(h.push(i),d=i.i-1):d-=1;h.reverse();j=function(a,e){return{pattern:"bruteforce",i:a,j:e,token:b.slice(a,+e+1||9E9),entropy:m(Math.pow(c,e-a+1)),cardinality:c}};d=0;k=[];l=0;for(e=h.length;l<e;l++)i=h[l],g=[i.i,i.j],f=g[0],g=g[1],0<f-d&&k.push(j(d,f-1)),d=g+1,k.push(i);d<b.length&&k.push(j(d,b.length-1));h=k;i=n[b.length-1]||0;d=Z(i);return{password:b,entropy:y(i,3),match_sequence:h,crack_time:y(d,3),crack_time_display:Y(d),score:U(d)}};
y=function(b,a){return Math.round(b*Math.pow(10,a))/Math.pow(10,a)};Z=function(b){return 5.0E-5*Math.pow(2,b)};U=function(b){return b<Math.pow(10,2)?0:b<Math.pow(10,4)?1:b<Math.pow(10,6)?2:b<Math.pow(10,8)?3:4};T=function(b){var a;if(null!=b.entropy)return b.entropy;a=function(){switch(b.pattern){case "repeat":return ca;case "sequence":return da;case "digits":return X;case "year":return fa;case "date":return V;case "spatial":return ea;case "dictionary":return W}}();return b.entropy=a(b)};ca=function(b){var a;
a=x(b.token);return m(a*b.token.length)};da=function(b){var a;a=b.token.charAt(0);a="a"===a||"1"===a?1:a.match(/\d/)?m(10):a.match(/[a-z]/)?m(26):m(26)+1;b.ascending||(a+=1);return a+m(b.token.length)};X=function(b){return m(Math.pow(10,b.token.length))};fa=function(){return m(119)};V=function(b){var a;a=100>b.year?m(37200):m(44268);b.separator&&(a+=2);return a};ea=function(b){var a,e,c,f,d,g,h,j,k,i;"qwerty"===(c=b.graph)||"dvorak"===c?(k=ga,e=ha):(k=ia,e=ja);h=0;a=b.token.length;i=b.turns;for(c=
d=2;2<=a?d<=a:d>=a;c=2<=a?++d:--d){j=Math.min(i,c-1);for(f=g=1;1<=j?g<=j:g>=j;f=1<=j?++g:--g)h+=s(c-1,f-1)*k*Math.pow(e,f)}e=m(h);if(b.shifted_count){a=b.shifted_count;b=b.token.length-b.shifted_count;c=f=h=0;for(d=Math.min(a,b);0<=d?f<=d:f>=d;c=0<=d?++f:--f)h+=s(a+b,c);e+=m(h)}return e};W=function(b){b.base_entropy=m(b.rank);b.uppercase_entropy=aa(b);b.l33t_entropy=$(b);return b.base_entropy+b.uppercase_entropy+b.l33t_entropy};S=/^[A-Z][^A-Z]+$/;R=/^[^A-Z]+[A-Z]$/;Q=/^[^a-z]+$/;P=/^[^A-Z]+$/;aa=
function(b){var a,e,c,f,d,g,h;h=b.token;if(h.match(P))return 0;c=[S,R,Q];b=0;for(a=c.length;b<a;b++)if(f=c[b],h.match(f))return 1;a=function(){var b,a,c,d;c=h.split("");d=[];a=0;for(b=c.length;a<b;a++)e=c[a],e.match(/[A-Z]/)&&d.push(e);return d}().length;b=function(){var a,b,c,d;c=h.split("");d=[];b=0;for(a=c.length;b<a;b++)e=c[b],e.match(/[a-z]/)&&d.push(e);return d}().length;c=f=d=0;for(g=Math.min(a,b);0<=g?f<=g:f>=g;c=0<=g?++f:--f)d+=s(a+b,c);return m(d)};$=function(b){var a,e,c,f,d,g,h,j,k,i;
if(!b.l33t)return 0;g=0;h=b.sub;for(k in h){i=h[k];a=function(){var a,e,d,f;d=b.token.split("");f=[];a=0;for(e=d.length;a<e;a++)c=d[a],c===k&&f.push(c);return f}().length;e=function(){var a,e,d,f;d=b.token.split("");f=[];a=0;for(e=d.length;a<e;a++)c=d[a],c===i&&f.push(c);return f}().length;f=d=0;for(j=Math.min(e,a);0<=j?d<=j:d>=j;f=0<=j?++d:--d)g+=s(e+a,f)}return m(g)||1};x=function(b){var a,e,c,f,d,g,h,j;d=[!1,!1,!1,!1,!1];f=d[0];j=d[1];e=d[2];h=d[3];d=d[4];g=b.split("");b=0;for(c=g.length;b<c;b++)a=
g[b],a=a.charCodeAt(0),48<=a&&57>=a?e=!0:65<=a&&90>=a?j=!0:97<=a&&122>=a?f=!0:127>=a?h=!0:d=!0;b=0;e&&(b+=10);j&&(b+=26);f&&(b+=26);h&&(b+=33);d&&(b+=100);return b};Y=function(b){return 60>b?"instant":3600>b?1+Math.ceil(b/60)+" minutes":86400>b?1+Math.ceil(b/3600)+" hours":2678400>b?1+Math.ceil(b/86400)+" days":32140800>b?1+Math.ceil(b/2678400)+" months":321408E4>b?1+Math.ceil(b/32140800)+" years":"centuries"};var z={"!":["`~",null,null,"2@","qQ",null],'"':[";:","[{","]}",null,null,"/?"],"#":["2@",
null,null,"4$","eE","wW"],$:["3#",null,null,"5%","rR","eE"],"%":["4$",null,null,"6^","tT","rR"],"&":["6^",null,null,"8*","uU","yY"],"'":[";:","[{","]}",null,null,"/?"],"(":["8*",null,null,"0)","oO","iI"],")":["9(",null,null,"-_","pP","oO"],"*":["7&",null,null,"9(","iI","uU"],"+":["-_",null,null,null,"]}","[{"],",":["mM","kK","lL",".>",null,null],"-":["0)",null,null,"=+","[{","pP"],".":[",<","lL",";:","/?",null,null],"/":[".>",";:","'\"",null,null,null],"0":["9(",null,null,"-_","pP","oO"],1:["`~",
null,null,"2@","qQ",null],2:["1!",null,null,"3#","wW","qQ"],3:["2@",null,null,"4$","eE","wW"],4:["3#",null,null,"5%","rR","eE"],5:["4$",null,null,"6^","tT","rR"],6:["5%",null,null,"7&","yY","tT"],7:["6^",null,null,"8*","uU","yY"],8:["7&",null,null,"9(","iI","uU"],9:["8*",null,null,"0)","oO","iI"],":":"lL,pP,[{,'\",/?,.>".split(","),";":"lL,pP,[{,'\",/?,.>".split(","),"<":["mM","kK","lL",".>",null,null],"=":["-_",null,null,null,"]}","[{"],">":[",<","lL",";:","/?",null,null],"?":[".>",";:","'\"",null,
null,null],"@":["1!",null,null,"3#","wW","qQ"],A:[null,"qQ","wW","sS","zZ",null],B:["vV","gG","hH","nN",null,null],C:["xX","dD","fF","vV",null,null],D:"sS,eE,rR,fF,cC,xX".split(","),E:"wW,3#,4$,rR,dD,sS".split(","),F:"dD,rR,tT,gG,vV,cC".split(","),G:"fF,tT,yY,hH,bB,vV".split(","),H:"gG,yY,uU,jJ,nN,bB".split(","),I:"uU,8*,9(,oO,kK,jJ".split(","),J:"hH,uU,iI,kK,mM,nN".split(","),K:"jJ iI oO lL ,< mM".split(" "),L:"kK oO pP ;: .> ,<".split(" "),M:["nN","jJ","kK",",<",null,null],N:["bB","hH","jJ","mM",
null,null],O:"iI,9(,0),pP,lL,kK".split(","),P:"oO,0),-_,[{,;:,lL".split(","),Q:[null,"1!","2@","wW","aA",null],R:"eE,4$,5%,tT,fF,dD".split(","),S:"aA,wW,eE,dD,xX,zZ".split(","),T:"rR,5%,6^,yY,gG,fF".split(","),U:"yY,7&,8*,iI,jJ,hH".split(","),V:["cC","fF","gG","bB",null,null],W:"qQ,2@,3#,eE,sS,aA".split(","),X:["zZ","sS","dD","cC",null,null],Y:"tT,6^,7&,uU,hH,gG".split(","),Z:[null,"aA","sS","xX",null,null],"[":"pP,-_,=+,]},'\",;:".split(","),"\\":["]}",null,null,null,null,null],"]":["[{","=+",null,
"\\|",null,"'\""],"^":["5%",null,null,"7&","yY","tT"],_:["0)",null,null,"=+","[{","pP"],"`":[null,null,null,"1!",null,null],a:[null,"qQ","wW","sS","zZ",null],b:["vV","gG","hH","nN",null,null],c:["xX","dD","fF","vV",null,null],d:"sS,eE,rR,fF,cC,xX".split(","),e:"wW,3#,4$,rR,dD,sS".split(","),f:"dD,rR,tT,gG,vV,cC".split(","),g:"fF,tT,yY,hH,bB,vV".split(","),h:"gG,yY,uU,jJ,nN,bB".split(","),i:"uU,8*,9(,oO,kK,jJ".split(","),j:"hH,uU,iI,kK,mM,nN".split(","),k:"jJ iI oO lL ,< mM".split(" "),l:"kK oO pP ;: .> ,<".split(" "),
m:["nN","jJ","kK",",<",null,null],n:["bB","hH","jJ","mM",null,null],o:"iI,9(,0),pP,lL,kK".split(","),p:"oO,0),-_,[{,;:,lL".split(","),q:[null,"1!","2@","wW","aA",null],r:"eE,4$,5%,tT,fF,dD".split(","),s:"aA,wW,eE,dD,xX,zZ".split(","),t:"rR,5%,6^,yY,gG,fF".split(","),u:"yY,7&,8*,iI,jJ,hH".split(","),v:["cC","fF","gG","bB",null,null],w:"qQ,2@,3#,eE,sS,aA".split(","),x:["zZ","sS","dD","cC",null,null],y:"tT,6^,7&,uU,hH,gG".split(","),z:[null,"aA","sS","xX",null,null],"{":"pP,-_,=+,]},'\",;:".split(","),
"|":["]}",null,null,null,null,null],"}":["[{","=+",null,"\\|",null,"'\""],"~":[null,null,null,"1!",null,null]},A={"*":["/",null,null,null,"-","+","9","8"],"+":["9","*","-",null,null,null,null,"6"],"-":["*",null,null,null,null,null,"+","9"],".":["0","2","3",null,null,null,null,null],"/":[null,null,null,null,"*","9","8","7"],"0":[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6",null,null,null,".","0"],4:[null,null,"7","8",
"5","2","1",null],5:"4,7,8,9,6,3,2,1".split(","),6:["5","8","9","+",null,null,"3","2"],7:[null,null,null,"/","8","5","4",null],8:["7",null,"/","*","9","6","5","4"],9:["8","/","*","-","+",null,"6","5"]},B,ha,ga,ja,ia,ka,r,t,C;ka=[function(b){var a,e,c,f,d,g;d=q(b,K);g=[];c=0;for(f=d.length;c<f;c++)a=d[c],e=[a.i,a.j],a=e[0],e=e[1],g.push({pattern:"digits",i:a,j:e,token:b.slice(a,+e+1||9E9)});return g},function(b){var a,e,c,f,d,g;d=q(b,O);g=[];c=0;for(f=d.length;c<f;c++)a=d[c],e=[a.i,a.j],a=e[0],e=e[1],
g.push({pattern:"year",i:a,j:e,token:b.slice(a,+e+1||9E9)});return g},function(b){return I(b).concat(H(b))},function(b){var a,e,c;c=[];for(a=0;a<b.length;){for(e=a+1;;)if(b.slice(e-1,+e+1||9E9),b.charAt(e-1)===b.charAt(e))e+=1;else{2<e-a&&c.push({pattern:"repeat",i:a,j:e-1,token:b.slice(a,e),repeated_char:b.charAt(a)});break}a=e}return c},function(b){var a,e,c,f,d,g,h,j,k,i,l,n,m;j=[];for(d=0;d<b.length;){g=d+1;n=m=k=null;for(l in u)if(i=u[l],c=function(){var c,e,f,h;f=[b.charAt(d),b.charAt(g)];h=
[];c=0;for(e=f.length;c<e;c++)a=f[c],h.push(i.indexOf(a));return h}(),f=c[0],c=c[1],-1<f&&-1<c&&(f=c-f,1===f||-1===f)){k=i;m=l;n=f;break}if(k)for(;;)if(f=b.slice(g-1,+g+1||9E9),h=f[0],e=f[1],c=function(){var b,c,d,f;d=[h,e];f=[];b=0;for(c=d.length;b<c;b++)a=d[b],f.push(i.indexOf(a));return f}(),f=c[0],c=c[1],c-f===n)g+=1;else{2<g-d&&j.push({pattern:"sequence",i:d,j:g-1,token:b.slice(d,g),sequence_name:m,sequence_space:k.length,ascending:1===n});break}d=g}return j},function(b){var a,e,c;c=[];for(e in B)a=
B[e],w(c,N(b,a,e));return c}];B={qwerty:z,dvorak:{"!":["`~",null,null,"2@","'\"",null],'"':[null,"1!","2@",",<","aA",null],"#":["2@",null,null,"4$",".>",",<"],$:["3#",null,null,"5%","pP",".>"],"%":["4$",null,null,"6^","yY","pP"],"&":["6^",null,null,"8*","gG","fF"],"'":[null,"1!","2@",",<","aA",null],"(":["8*",null,null,"0)","rR","cC"],")":["9(",null,null,"[{","lL","rR"],"*":["7&",null,null,"9(","cC","gG"],"+":["/?","]}",null,"\\|",null,"-_"],",":"'\",2@,3#,.>,oO,aA".split(","),"-":["sS","/?","=+",
null,null,"zZ"],".":",< 3# 4$ pP eE oO".split(" "),"/":"lL,[{,]},=+,-_,sS".split(","),"0":["9(",null,null,"[{","lL","rR"],1:["`~",null,null,"2@","'\"",null],2:["1!",null,null,"3#",",<","'\""],3:["2@",null,null,"4$",".>",",<"],4:["3#",null,null,"5%","pP",".>"],5:["4$",null,null,"6^","yY","pP"],6:["5%",null,null,"7&","fF","yY"],7:["6^",null,null,"8*","gG","fF"],8:["7&",null,null,"9(","cC","gG"],9:["8*",null,null,"0)","rR","cC"],":":[null,"aA","oO","qQ",null,null],";":[null,"aA","oO","qQ",null,null],
"<":"'\",2@,3#,.>,oO,aA".split(","),"=":["/?","]}",null,"\\|",null,"-_"],">":",< 3# 4$ pP eE oO".split(" "),"?":"lL,[{,]},=+,-_,sS".split(","),"@":["1!",null,null,"3#",",<","'\""],A:[null,"'\"",",<","oO",";:",null],B:["xX","dD","hH","mM",null,null],C:"gG,8*,9(,rR,tT,hH".split(","),D:"iI,fF,gG,hH,bB,xX".split(","),E:"oO,.>,pP,uU,jJ,qQ".split(","),F:"yY,6^,7&,gG,dD,iI".split(","),G:"fF,7&,8*,cC,hH,dD".split(","),H:"dD,gG,cC,tT,mM,bB".split(","),I:"uU,yY,fF,dD,xX,kK".split(","),J:["qQ","eE","uU","kK",
null,null],K:["jJ","uU","iI","xX",null,null],L:"rR,0),[{,/?,sS,nN".split(","),M:["bB","hH","tT","wW",null,null],N:"tT,rR,lL,sS,vV,wW".split(","),O:"aA ,< .> eE qQ ;:".split(" "),P:".>,4$,5%,yY,uU,eE".split(","),Q:[";:","oO","eE","jJ",null,null],R:"cC,9(,0),lL,nN,tT".split(","),S:"nN,lL,/?,-_,zZ,vV".split(","),T:"hH,cC,rR,nN,wW,mM".split(","),U:"eE,pP,yY,iI,kK,jJ".split(","),V:["wW","nN","sS","zZ",null,null],W:["mM","tT","nN","vV",null,null],X:["kK","iI","dD","bB",null,null],Y:"pP,5%,6^,fF,iI,uU".split(","),
Z:["vV","sS","-_",null,null,null],"[":["0)",null,null,"]}","/?","lL"],"\\":["=+",null,null,null,null,null],"]":["[{",null,null,null,"=+","/?"],"^":["5%",null,null,"7&","fF","yY"],_:["sS","/?","=+",null,null,"zZ"],"`":[null,null,null,"1!",null,null],a:[null,"'\"",",<","oO",";:",null],b:["xX","dD","hH","mM",null,null],c:"gG,8*,9(,rR,tT,hH".split(","),d:"iI,fF,gG,hH,bB,xX".split(","),e:"oO,.>,pP,uU,jJ,qQ".split(","),f:"yY,6^,7&,gG,dD,iI".split(","),g:"fF,7&,8*,cC,hH,dD".split(","),h:"dD,gG,cC,tT,mM,bB".split(","),
i:"uU,yY,fF,dD,xX,kK".split(","),j:["qQ","eE","uU","kK",null,null],k:["jJ","uU","iI","xX",null,null],l:"rR,0),[{,/?,sS,nN".split(","),m:["bB","hH","tT","wW",null,null],n:"tT,rR,lL,sS,vV,wW".split(","),o:"aA ,< .> eE qQ ;:".split(" "),p:".>,4$,5%,yY,uU,eE".split(","),q:[";:","oO","eE","jJ",null,null],r:"cC,9(,0),lL,nN,tT".split(","),s:"nN,lL,/?,-_,zZ,vV".split(","),t:"hH,cC,rR,nN,wW,mM".split(","),u:"eE,pP,yY,iI,kK,jJ".split(","),v:["wW","nN","sS","zZ",null,null],w:["mM","tT","nN","vV",null,null],
x:["kK","iI","dD","bB",null,null],y:"pP,5%,6^,fF,iI,uU".split(","),z:["vV","sS","-_",null,null,null],"{":["0)",null,null,"]}","/?","lL"],"|":["=+",null,null,null,null,null],"}":["[{",null,null,null,"=+","/?"],"~":[null,null,null,"1!",null,null]},keypad:A,mac_keypad:{"*":["/",null,null,null,null,null,"-","9"],"+":["6","9","-",null,null,null,null,"3"],"-":["9","/","*",null,null,null,"+","6"],".":["0","2","3",null,null,null,null,null],"/":["=",null,null,null,"*","-","9","8"],"0":[null,"1","2","3",".",
null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6","+",null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:"4,7,8,9,6,3,2,1".split(","),6:["5","8","9","-","+",null,"3","2"],7:[null,null,null,"=","8","5","4",null],8:["7",null,"=","/","9","6","5","4"],9:"8,=,/,*,-,+,6,5".split(","),"=":[null,null,null,null,"/","9","8","7"]}};r=function(b){var a,e,c,f,d;a=0;for(c in b)d=b[c],a+=function(){var a,b,c;c=[];a=0;for(b=d.length;a<b;a++)(f=d[a])&&
c.push(f);return c}().length;return a/=function(){var a;a=[];for(e in b)a.push(e);return a}().length};ha=r(z);ja=r(A);ga=function(){var b;b=[];for(t in z)b.push(t);return b}().length;ia=function(){var b;b=[];for(t in A)b.push(t);return b}().length;C=function(){return(new Date).getTime()};r=function(b,a){var e,c;null==a&&(a=[]);c=C();e=L(b,ka.concat([D("user_inputs",E(a.map(function(a){return a.toLowerCase()})))]));e=ba(b,e);e.calc_time=C()-c;return e};"undefined"!==typeof window&&null!==window?(window.zxcvbn=
r,"function"===typeof window.zxcvbn_load_hook&&window.zxcvbn_load_hook()):"undefined"!==typeof exports&&null!==exports&&(exports.zxcvbn=r)})();
