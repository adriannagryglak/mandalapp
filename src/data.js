import mushroom from './images/mushroom.png';
import funghi from './images/funghi.png';
import cone from './images/cone.png';
import sunflower from './images/sunflower.png';
import moon from './images/moon.png';
import purpleFlower from './images/purple-flower.png';
import fernLeaf from './images/fern-leaf.png';
import greenLeaf from './images/green-leaf.png';
import littleLeaf from './images/little-leaf.png';
import pineCone from './images/pine-cone.png';
import redLeaf from './images/red-leaf.png';
import yellowLeaf from './images/yellow-leaf.png';
import wood from './images/wood.png';
import blueFlower from './images/blue-flower.png';
import butterfly from './images/butterfly.png';
import butterflyBlue from './images/butterfly-blue.png';
import cosmos from './images/cosmos.png';
import cosmosMiddle from './images/cosmos-middle.png';
import lilac from './images/lilac.png';
import rose from './images/rose.png';
import roseMiddle from './images/rose-middle.png';
import roseYellow from './images/rose-yellow.png';



export const mandalaData = {
  middle: {
    plants: {
      moon: moon,
      'pine-cone': pineCone,
      wood: wood,
      sunflower: sunflower,
      cosmos: cosmosMiddle,
      rose: roseMiddle,
    },
  },
  sizes: {
    none: 1,
    small: 10,
    medium: 20,
    big: 30,
  },
  layers: {
    plants: {
      mushroom: mushroom,
      cone: cone,
      funghi: funghi,
      'purple-flower': purpleFlower,
      'little-leaf': littleLeaf,
      'green-leaf': greenLeaf,
      'red-leaf': redLeaf,
      'fern-leaf': fernLeaf,
      'yellow-leaf': yellowLeaf,
      'blue-flower': blueFlower,
      'butterfly-blue': butterflyBlue,
      butterfly: butterfly,
      lilac: lilac,
      cosmos: cosmos,
      rose: rose,
      'yellow-rose': roseYellow,
    },
  },
};

if (window.matchMedia('(min-width: 992px)').matches) {
  mandalaData.sizes.small = 20;
  mandalaData.sizes.medium = 40;
  mandalaData.sizes.big = 60;
}

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    mandalaData.sizes.small = 20;
    mandalaData.sizes.medium = 40;
    mandalaData.sizes.big = 60;
  } else {
    mandalaData.sizes.small = 10;
    mandalaData.sizes.medium = 20;
    mandalaData.sizes.big = 30;
  }
});