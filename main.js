// total layers
var TOTAL_LAYERS = 3;

// layer sizes and font sizes for each layer 
var LAYER_SIZES = [
  { w: 1728, h: 1117, fontSize: 32, checkSize: 34, labelSize: 24, hintSize: 13 },
  { w: 860,  h: 600,  fontSize: 22, checkSize: 26, labelSize: 18, hintSize: 11 },
  { w: 500,  h: 360,  fontSize: 14, checkSize: 18, labelSize: 13, hintSize: 10 },
];

// messages for each layer
var LAYER_MESSAGES = [
  { emoji: '<img src="star1.png" width="200" height="200">', title: "Wait... there's more!", sub: 'Just one more agreement...', btn: 'Next' },
  { emoji: '<img src="star2.png" width="150" height="150">', title: 'There is more again!', sub: "one more agreement...", btn: 'Next' },
  { emoji: '<img src="star3.png" width="100" height="100">', title: "More!", sub: 'Do you think there is one more...?', btn: "Next" },
];

// star positions and colors for each layer
var STAR_DATA = 
  //first layer 
  [
  [
    { x: 260,  y: 119,  color: 'blue'   },
    { x: 723,  y: 212, color: 'blue'   },
    { x: 312,  y: 716, color: 'blue'   },
    { x: 1302, y: 984, color: 'blue'   },
    { x: 1203, y: 600, color: 'blue'   },
    { x: 1479, y: 135,  color: 'blue'   },
    { x: 533,  y: 135,  color: 'blue'   },
    { x: 244,  y: 904, color: 'blue'   },
    { x: 948,  y: 867, color: 'blue'   },
    { x: 860,  y: 135,  color: 'blue'   },
    { x: 342,  y: 508, color: 'blue'   },
    { x: 453,  y: 355, color: 'blue'   },
    { x: 1279, y: 794, color: 'blue'   },
    { x: 1263, y: 355, color: 'orange' },
    { x: 1408, y: 270, color: 'orange' },
    { x: 446,  y: 778, color: 'orange' },
    { x: 326,  y: 254, color: 'orange' },
    { x: 838,  y: 323, color: 'orange' },
    { x: 1447, y: 904, color: 'orange' },
    { x: 478,  y: 616, color: 'pink'   },
    { x: 1058, y: 286, color: 'pink'   },
    { x: 788,  y: 936, color: 'pink'   },
    { x: 244,  y: 339, color: 'pink'   },
    { x: 1141, y: 936, color: 'pink'   },
    { x: 1058, y: 700, color: 'pink'   },
    { x: 860,  y: 135,  color: 'pink'   },
    { x: 557,  y: 254, color: 'yellow' },
    { x: 609,  y: 819, color: 'yellow' },
    { x: 854,  y: 744, color: 'yellow' },
    { x: 1463, y: 668, color: 'yellow' },
    { x: 1408, y: 508, color: 'yellow' },
    { x: 469,  y: 952, color: 'yellow' },
    { x: 1318, y: 151, color: 'yellow' },
    { x: 212,  y: 575, color: 'yellow' },
    { x: 1058, y: 103,  color: 'yellow' },
  ],

  // second layer 
  [
    { x: 120, y: 79,  color: 'orange' }, 
    { x: 453, y: 172, color: 'orange' }, 
    { x: 449, y: 31,  color: 'orange' }, 
    { x: 648, y: 381, color: 'orange' }, 
    { x: 152, y: 397, color: 'orange' }, 
    { x: 277, y: 452, color: 'orange' },
    { x: 72,  y: 299, color: 'orange' },  
    { x: 329, y: 111, color: 'pink'   },   
    { x: 152, y: 172, color: 'pink'   },
    { x: 430, y: 413, color: 'pink'   }, 
    { x: 768, y: 283, color: 'pink'   }, 
    { x: 736, y: 63,  color: 'pink'   }, 
    { x: 768, y: 496, color: 'yellow' },
    { x: 616, y: 480, color: 'yellow' }, 
    { x: 398, y: 512, color: 'yellow' },
    { x: 88,  y: 496, color: 'yellow' },  
    { x: 600, y: 111, color: 'yellow' }, 
    { x: 88,  y: 496, color: 'yellow' }, 
  ],

  // third layer
  [
    { x: 56,  y: 287, color: 'orange' }, 
    { x: 253, y: 291, color: 'orange' }, 
    { x: 162, y: 36,  color: 'orange' }, 
    { x: 389, y: 52,  color: 'orange' }, 
    { x: 399, y: 196, color: 'orange' }, 
    { x: 88,  y: 84,  color: 'orange' }, 
    { x: 139, y: 255, color: 'orange' }, 
    { x: 330, y: 255, color: 'yellow' }, 
    { x: 24,  y: 20,  color: 'yellow' }, 
    { x: 285, y: 68,  color: 'yellow' }, 
    { x: 421, y: 303, color: 'yellow' }, 
    { x: 443, y: 100, color: 'yellow' }, 
    { x: 443, y: 20,  color: 'yellow' }, 
    { x: 24,  y: 178, color: 'yellow' }, 
  ],
];

// create a layer 
function createLayer(layerIndex, parentEl) {
  var size = LAYER_SIZES[layerIndex];
  var isFirst = layerIndex === 0;

  // frame
  var layer = document.createElement('div');
  layer.className = isFirst ? 'layer layer-0' : 'layer layer-popup';
  layer.style.width  = size.w + 'px';
  layer.style.height = size.h + 'px';

  // center content
  var center = document.createElement('div');
  center.className = 'center-content';

  var counter = document.createElement('p');

  var instruction = document.createElement('p');
  instruction.className = 'instruction';
  instruction.style.fontSize = size.fontSize + 'px';
  instruction.textContent = 'Click 5 stars of the same color to agree.';

  var agreeRow = document.createElement('div');
  agreeRow.className = 'agree-row';

  var checkboxBox = document.createElement('div');
  checkboxBox.className = 'checkbox-box';
  checkboxBox.style.width  = size.checkSize + 'px';
  checkboxBox.style.height = size.checkSize + 'px';
  checkboxBox.style.fontSize = (size.checkSize * 0.6) + 'px';

  var agreeLabel = document.createElement('span');
  agreeLabel.className = 'agree-label';
  agreeLabel.style.fontSize = size.labelSize + 'px';
  agreeLabel.textContent = 'I agree to the terms';
  
  agreeRow.appendChild(checkboxBox);
  agreeRow.appendChild(agreeLabel);

  var hint = document.createElement('p');
  hint.className = 'hint';
  hint.style.fontSize = size.hintSize + 'px';
  hint.textContent = 'Good luck...';

  center.appendChild(instruction);
  center.appendChild(agreeRow);
  center.appendChild(hint);
  layer.appendChild(center);

  // success message
  var giftSuccess = document.createElement('div');
  giftSuccess.className = 'gift-success';

  var giftEmoji = document.createElement('div');
  giftEmoji.className = 'gift-emoji';

  var giftTitle = document.createElement('p');
  giftTitle.className = 'gift-title';
  giftTitle.style.fontSize = '35px';

  var giftSub = document.createElement('p');
  giftSub.className = 'gift-sub';
  giftSub.style.fontSize =  '15px';

  var nextBtn = document.createElement('button');
  nextBtn.className = 'next-btn';
  nextBtn.style.fontSize = '15px';
  nextBtn.style.padding =  '15px';

  giftSuccess.appendChild(giftEmoji);
  giftSuccess.appendChild(giftTitle);
  giftSuccess.appendChild(giftSub);
  giftSuccess.appendChild(nextBtn);
  layer.appendChild(giftSuccess);

  parentEl.appendChild(layer);

  // put stars
 var starData = STAR_DATA[layerIndex];
  starData.forEach(function(data) {
    var div = document.createElement('div');
    div.className = 'star star--' + data.color;
    div.style.left = data.x + 'px';
    div.style.top  = data.y + 'px';
    div.dataset.color = data.color;
    div.innerHTML = '<svg width="32" height="32" viewBox="0 0 32 32"><polygon points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12"/></svg>';
    div.addEventListener('click', onStarClick);
    layer.appendChild(div);
  });

  // what stars are selected and whether the agreement is successful
  var selected = [];
  var agreed = false;

  function onStarClick(e) {
    if (agreed) return;
    var el = e.currentTarget;
    var color = el.dataset.color;

    var idx = -1;
    for (var i = 0; i < selected.length; i++) {
      if (selected[i].el === el) { idx = i; break; }
    }
    if (idx !== -1) {
      selected.splice(idx, 1);
      el.classList.remove('selected');
      hint.textContent = selected.length + ' / 5 selected';
      return;
    }

    selected.push({ el: el, color: color });
    el.classList.add('selected');
    hint.textContent = selected.length + ' / 5 selected';

    if (selected.length === 5) {
      var colors = selected.map(function(s) { return s.color; });
      var allSame = colors.every(function(c) { return c === colors[0]; });
      if (allSame) {
        onSuccess();
      } else {
        onWrong();
      }
    }
  }

  function onWrong() {
    hint.textContent = 'All 5 must be the SAME color ';
    hint.className = 'hint wrong';
    setTimeout(function() {
      selected.forEach(function(s) { s.el.classList.remove('selected'); });
      selected = [];
      hint.textContent = 'Try again...';
      hint.className = 'hint';
    }, 700);
  }

  function onSuccess() {
    agreed = true;
    selected.forEach(function(s) { s.el.classList.remove('selected'); });
    checkboxBox.textContent = '✓';
    checkboxBox.classList.add('checked');

    var isLast = layerIndex >= TOTAL_LAYERS - 1;
    var msg = LAYER_MESSAGES[layerIndex];

    setTimeout(function() {
      giftSuccess.classList.add('active');
      giftEmoji.innerHTML = msg.emoji;
      giftTitle.textContent = msg.title;
      giftSub.textContent   = msg.sub;
      nextBtn.textContent   = msg.btn;

      if (isLast) {
        nextBtn.onclick = function() {
          giftTitle.textContent = 'Just kidding';
          giftSub.textContent   = '...okay fine, you\'re done. For real!';
          nextBtn.style.display = 'none';
        };
      } else {
        nextBtn.onclick = function() {
          giftSuccess.style.transition = 'opacity 0.25s ease';
          giftSuccess.style.opacity = '0';
          setTimeout(function() {
            giftSuccess.classList.remove('active');
            giftSuccess.style.opacity = '';
            giftSuccess.style.transition = '';

            var backdrop = document.createElement('div');
            backdrop.className = 'layer-backdrop';
            layer.appendChild(backdrop);
            setTimeout(function() { backdrop.classList.add('active'); }, 10);

            var nextLayer = createLayer(layerIndex + 1, layer);
            setTimeout(function() { nextLayer.classList.add('active'); }, 30);
          }, 280);
        };
      }
    }, 300);
  }

  return layer;
}

// initialize the first layer
var page = document.getElementById('page');
createLayer(0, page);
