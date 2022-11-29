import React from 'react';
import Item from './item'
import iphone from './img/iphone.png'
import pods from './img/pods.png'
import s22 from './img/samsung.png'
import ps5 from './img/ps5.png'
import mac from './img/mac.png'
import charge from './img/charge.png'
import nintendo from './img/switch.png'

const Content = () => {
    return (
        <div>
        <Item
          title="Iphone"
          desc="Apple iPhone 14 256GB Starlight"
          price='120,000'
          discount='99,000'
          backgroundImg={iphone}
          BtnTxt=" Custom Order"
          Btnlink=""
          
        />
        <Item
          title="Airpods 2nd Gen"
          desc="2nd gen apple air pods"
          price='15,000'
          discount='12,000'
          backgroundImg={pods}
          BtnTxt=" Custom Order"
          Btnlink=""
         
          />
        <Item
          title="Samsung"
          desc="S22 Ultra"
          price='102,000'
          discount='120,000'
          backgroundImg={s22}
          leftBtnTxt=" Custom Order"
          leftBtnlink=""
          
        />
        <Item
          title="Nintendo"
          desc="Nintendo Switch"
          price='24,000'
          discount='25,000'
          backgroundImg={mac}
          leftBtnTxt=" Custom Order"
          leftBtnlink=""
          
        />
        <Item
          title="Iphone"
          desc="Apple iPhone 14 256GB Starlight"
          price='120,000'
          discount='99,000'
          backgroundImg={iphone}
          BtnTxt=" Custom Order"
          Btnlink=""
          
        />
        <Item
          title="Airpods 2nd Gen"
          desc="next gen apple airpods"
          price='15,000'
          discount='12,000'
          backgroundImg={charge}
          BtnTxt=" Custom Order"
          Btnlink=""
         
          />
        <Item
          title="Samsung"
          desc="S22 Ultra"
          price='102,000'
          discount='120,000'
          backgroundImg={s22}
          leftBtnTxt=" Custom Order"
          leftBtnlink=""
          
        />
        <Item
          title="Nintendo"
          desc="Nintendo Switch"
          price='24,000'
          discount='25,000'
          backgroundImg={iphone}
          leftBtnTxt=" Custom Order"
          leftBtnlink=""
          
        />
        
        </div>
    );
};

export default Content;