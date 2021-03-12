///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define(['dojo/_base/declare', 'jimu/BaseWidget','esri/symbols/SimpleMarkerSymbol', 'dojo/_base/lang', 'dojo/dom','esri/graphic', 'esri/color',],
  function(declare, BaseWidget, SimpleMarkerSymbol, lang, dom, Graphic, Color) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-addGraphic',
      name: 'AddGraphic',
      symbol: null,
      
      postCreate: function() {
        this.symbol = new SimpleMarkerSymbol ();
      },

      onOpen: function(){

        this.map.on("click", lang.hitch (this, function(evt) {
          if (dom.byId("activado").checked ==true) {
            var point = evt.mapPoint;
            var graphic = new Graphic (point, this.symbol);
            this.map.graphics.clear();
            this.map.graphics.add (graphic);

          }

        }));
        this.map.graphics.show();
      },
      onClose: function(){
        
        this.map.graphics.hide();
      }

// 
      // startup: function() {
      //  this.inherited(arguments);
      //  this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      //  console.log('startup');
      // },

      // onOpen: function(){
      //   console.log('onOpen');
      // },

      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });