function patienceDiff(e,n,t){function i(e,n,t){let i=new Map;for(let l=n;l<=t;l++){let o=e[l];i.has(o)?(i.get(o).count++,i.get(o).index=l):i.set(o,{count:1,index:l})}return i.forEach((e,n,t)=>{1!==e.count?t.delete(n):t.set(n,e.index)}),i}function l(e,n,t,l,o,d){let r=i(e,n,t),u=i(l,o,d);return r.forEach((e,n,t)=>{u.has(n)?t.set(n,{indexA:e,indexB:u.get(n)}):t.delete(n)}),r}let o=[],d=0,r=0,u=[],f=[],h=[],x=[];function _(t,i){i<0?(u.push(e[t]),f.push(o.length),d++):t<0&&(h.push(n[i]),x.push(o.length),r++),o.push({line:0<=t?e[t]:n[i],aIndex:t,bIndex:i})}function s(t,i,o,d){for(;t<=i&&o<=d&&e[t]===n[o];)_(t++,o++);let r=i;for(;t<=i&&o<=d&&e[i]===n[d];)i--,d--;let u=l(e,t,i,n,o,d);if(0===u.size){for(;t<=i;)_(t++,-1);for(;o<=d;)_(-1,o++)}else $(t,i,o,d,u);for(;i<r;)_(++i,++d)}function $(t,i,o,d,r){let u=function e(n){let t=[];n.forEach((e,n,i)=>{let l=0;for(;t[l]&&t[l][t[l].length-1].indexB<e.indexB;)l++;t[l]||(t[l]=[]),0<l&&(e.prev=t[l-1][t[l-1].length-1]),t[l].push(e)});let i=[];if(0<t.length){let l=t.length-1;for(i=[t[l][t[l].length-1]];i[i.length-1].prev;)i.push(i[i.length-1].prev)}return i.reverse()}(r||l(e,t,i,n,o,d));if(0===u.length)s(t,i,o,d);else{(t<u[0].indexA||o<u[0].indexB)&&s(t,u[0].indexA-1,o,u[0].indexB-1);let f;for(f=0;f<u.length-1;f++)s(u[f].indexA,u[f+1].indexA-1,u[f].indexB,u[f+1].indexB-1);(u[f].indexA<=i||u[f].indexB<=d)&&s(u[f].indexA,i,u[f].indexB,d)}}return($(0,e.length-1,0,n.length-1),t)?{lines:o,lineCountDeleted:d,lineCountInserted:r,lineCountMoved:0,aMove:u,aMoveIndex:f,bMove:h,bMoveIndex:x}:{lines:o,lineCountDeleted:d,lineCountInserted:r,lineCountMoved:0}}export default patienceDiff;