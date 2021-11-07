function start_calssification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/P33G-yi6b/model.json',modelready);
}
function modelready()
{
    classifier.classify(gotResult);   
}

function gotResult(error,result)
{

if(error)
{
    console.error(error);
}else
{
    console.log(result);
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear:'+ result[0].label;
    document.getElementById("result_confidence").innerHTML = 'confidence:'+ (result[0].confidence * 100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")"
    
    img1 = document.getElementById('alien-1');
    img2 = document.getElementById('alien-2');
    img3 = document.getElementById('alien-3');
    img4 = document.getElementById('alien-4');

    if(result[0].label = "clapping")
    {
        img1.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }else if(result[0].label = "go!")
    {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.gif";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }else if(result[0].label = "thamping")
    {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.gif";
        img4.src = "aliens-04.png";
    }
    else if(result[0].label = "Background-Noise")
    {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.gif";
    };
}
}

