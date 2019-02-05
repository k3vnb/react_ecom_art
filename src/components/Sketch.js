export default function sketch (p) {
    let t = -250;
    let rotation = 0;
  
    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(20)
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };
  
    p.draw = function () {
        if (t < 251){
            let randomColor1=Math.floor(Math.random() * 255) + 1;
            let randomColor2=Math.floor(Math.random() * 255) + 1;
            let randomColor3=Math.floor(Math.random() * 255) + 1;
            p.stroke(randomColor1, randomColor2, randomColor3);
            p.strokeWeight(randomColor1/20);
            p.translate(p.width/2, p.height/2);
            p.point(x(t), y(t));
            t++;
            console.log(t);
        }
    };

    let x = (t) => t;
    let y = (t) => p.sin(t/10) * 100;
  };