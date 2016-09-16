exports.getGlidingWeather = getGlidingWeather;


function getGlidingWeather (responseJSON){


    var d = new Date();
    var localeDate  =  d.toLocaleDateString()    ;
    var year        = '20'+localeDate.substr(6,4);
    var month       = localeDate.substr(0,2)     ;
    var date        = localeDate.substr(3,2)     ;

    var dataBlob   = {};
    var sectionIDs = [];
    var rowIDs = [];
    var sunInfo    = [];  // sunRise, sunSet Time, updateTime

    // set the sun Info
    sunInfo.push(responseJSON.sunrise);
    sunInfo.push(responseJSON.sunset) ;



    // Wind info
    var responseJSON = responseJSON.fcst['3'];

    //console.log("update_last >>>> "+responseJSON.update_last);
    sunInfo.push('12:00') ;
    var totalRow = responseJSON.hr_h.length;

    var dayArr=responseJSON.hr_d.filter(function(itm,i,a){ // 가져온 일자 배열 ex) [10,11,12,13,14,15,16,17,18,19,20]
        return i == responseJSON.hr_d.indexOf(itm);
    });

    var dayArrIdx = 0;
    var week      = new Array('(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)');

    var day        = week[new Date(year+'-'+month+'-'+dayArr[dayArrIdx]).getDay()];
    var sectionKey = month+'월 '+dayArr[dayArrIdx]+'일 '+day;

    sectionIDs.push(sectionKey);         //  첫번 째 섹션헤더(오늘 년월일) push

    dataBlob[sectionIDs[0]] = sectionKey;
    rowIDs[0] = []

    for(var i=0,j=0; i < totalRow; i++){



        if(responseJSON.hr_h[i] === '00') {
            dayArrIdx++;
            day = week[new Date(year+'-'+month+'-'+dayArr[dayArrIdx]).getDay()];
            if(i==0){

                j= -1;
            }
            j++;
            sectionKey = month+'월 '+dayArr[dayArrIdx]+'일 '+day;
            sectionIDs.push(sectionKey);
            rowIDs[j] = [];
            dataBlob[sectionIDs[j]] = sectionKey;

        }
        var rowJson={
            "key" : "rowID" + i,
            "time"        : responseJSON.hr_h[i],    // 시간
            "temperature" : responseJSON.TMPE[i],    // 온도
            "rain"        : responseJSON.PCPT[i],    // 강수량
            "cloud"       : responseJSON.HCDC[i],    // 구름
            "windSpeed"   : responseJSON.WINDSPD[i], // 바람스피드
            "windDir"     : responseJSON.WINDDIR[i], // 바람방향
            "windGust"    : responseJSON.GUST[i],    // 돌풍
        };
        rowIDs[j].push(rowJson.key);
        // dataBlob[sectionIDs[j]].push(rowJson);
        dataBlob[sectionKey + ':' + rowJson.key] = rowJson;
    }

    return {dataBlob,sectionIDs, rowIDs,sunInfo};


}