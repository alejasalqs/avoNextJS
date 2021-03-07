module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/data.js":
/*!**************************!*\
  !*** ./database/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = {\n  \"2zd33b8c\": {\n    name: \"Maluma Hass Avocado\",\n    id: \"2zd33b8c\",\n    sku: \"NUR72KCM\",\n    price: 1.15,\n    image: \"/images/maluma.jpg\",\n    attributes: {\n      description: \"A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage\",\n      shape: \"Oval\",\n      hardiness: \"1 °C\",\n      taste: \"Catchy, is an avocado\"\n    }\n  },\n  \"6trfgkkj\": {\n    name: \"Fuerte Avocado\",\n    id: \"6trfgkkj\",\n    sku: \"AX4M8SJV\",\n    price: 1.21,\n    image: \"/images/fuerte.jpg\",\n    attributes: {\n      description: \"The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.\",\n      shape: \"Pear\",\n      hardiness: \"-1 °C\",\n      taste: \"Magnificent, is a strong avocado\"\n    }\n  },\n  \"7bcr49em\": {\n    name: \"Gwen Hass Avocado\",\n    id: \"7bcr49em\",\n    sku: \"HYA78F6J\",\n    price: 1.25,\n    image: \"/images/gwen.jpg\",\n    attributes: {\n      description: \"A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)\",\n      shape: \"Plump\",\n      hardiness: \"−1 °C\",\n      taste: \"Superb, is an avocado\"\n    }\n  },\n  \"098323ks\": {\n    name: \"Bacon Avocado\",\n    id: \"098323ks\",\n    sku: \"BXD100BLK\",\n    price: 1.51,\n    image: \"/images/bacon.jpg\",\n    attributes: {\n      description: \"Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)\",\n      shape: \"Oval\",\n      hardiness: \"−5 °C\",\n      taste: \"Creamy, is an avocado\"\n    }\n  },\n  b8uthe2y: {\n    name: \"Hass Avocado\",\n    id: \"b8uthe2y\",\n    sku: \"RMRCZN7E\",\n    price: 1.39,\n    image: \"/images/hass.jpg\",\n    attributes: {\n      description: \"The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)\",\n      shape: \"Oval\",\n      hardiness: \"−1 °C\",\n      taste: \"Gorgeous, is an avocado\"\n    }\n  },\n  ewxsd6xb: {\n    name: \"Lamb Hass Avocado\",\n    id: \"ewxsd6xb\",\n    sku: \"N55229ZA\",\n    price: 1.34,\n    image: \"/images/lamb.jpg\",\n    attributes: {\n      description: \"The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.\",\n      shape: \"Obovate\",\n      hardiness: \"-2 °C\",\n      taste: \"Great, is an avocado\"\n    }\n  },\n  fpr72m9k: {\n    name: \"Pinkerton Avocado\",\n    id: \"fpr72m9k\",\n    sku: \"B4HZ42TM\",\n    price: 1.27,\n    image: \"/images/pinkerton.jpg\",\n    attributes: {\n      description: \"First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics\",\n      shape: \"Long pear\",\n      hardiness: \"−1 °C\",\n      taste: \"Marvelous, is an avocado\"\n    }\n  },\n  t9dv25gs: {\n    name: \"Reed Avocado\",\n    id: \"t9dv25gs\",\n    sku: \"ZY3T9XXC\",\n    price: 1.18,\n    image: \"/images/reed.jpg\",\n    attributes: {\n      description: \"Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)\",\n      shape: \"Round\",\n      hardiness: \"−1 °C\",\n      taste: \"Exquisite, is an avocado\"\n    }\n  },\n  t345w48y: {\n    name: \"Zutano Avocado\",\n    id: \"t345w48y\",\n    sku: \"MW79ZZ6Y\",\n    price: 1.25,\n    image: \"/images/zutano.jpg\",\n    attributes: {\n      description: \"The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.\",\n      shape: \"Pear\",\n      hardiness: \"-5 °C\",\n      taste: \"Splendid, is an avocado\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYXRhLmpzPzhiYjQiXSwibmFtZXMiOlsiZGF0YSIsIm5hbWUiLCJpZCIsInNrdSIsInByaWNlIiwiaW1hZ2UiLCJhdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb24iLCJzaGFwZSIsImhhcmRpbmVzcyIsInRhc3RlIiwiYjh1dGhlMnkiLCJld3hzZDZ4YiIsImZwcjcybTlrIiwidDlkdjI1Z3MiLCJ0MzQ1dzQ4eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxJQUFJLEdBQUc7QUFDWCxjQUFZO0FBQ1ZDLFFBQUksRUFBRSxxQkFESTtBQUVWQyxNQUFFLEVBQUUsVUFGTTtBQUdWQyxPQUFHLEVBQUUsVUFISztBQUlWQyxTQUFLLEVBQUUsSUFKRztBQUtWQyxTQUFLLEVBQUUsb0JBTEc7QUFNVkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1QsK0xBRlE7QUFHVkMsV0FBSyxFQUFFLE1BSEc7QUFJVkMsZUFBUyxFQUFFLE1BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFORixHQUREO0FBZVgsY0FBWTtBQUNWVCxRQUFJLEVBQUUsZ0JBREk7QUFFVkMsTUFBRSxFQUFFLFVBRk07QUFHVkMsT0FBRyxFQUFFLFVBSEs7QUFJVkMsU0FBSyxFQUFFLElBSkc7QUFLVkMsU0FBSyxFQUFFLG9CQUxHO0FBTVZDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULDRVQUZRO0FBR1ZDLFdBQUssRUFBRSxNQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTkYsR0FmRDtBQTZCWCxjQUFZO0FBQ1ZULFFBQUksRUFBRSxtQkFESTtBQUVWQyxNQUFFLEVBQUUsVUFGTTtBQUdWQyxPQUFHLEVBQUUsVUFISztBQUlWQyxTQUFLLEVBQUUsSUFKRztBQUtWQyxTQUFLLEVBQUUsa0JBTEc7QUFNVkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1Qsa1dBRlE7QUFHVkMsV0FBSyxFQUFFLE9BSEc7QUFJVkMsZUFBUyxFQUFFLE9BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFORixHQTdCRDtBQTJDWCxjQUFZO0FBQ1ZULFFBQUksRUFBRSxlQURJO0FBRVZDLE1BQUUsRUFBRSxVQUZNO0FBR1ZDLE9BQUcsRUFBRSxXQUhLO0FBSVZDLFNBQUssRUFBRSxJQUpHO0FBS1ZDLFNBQUssRUFBRSxtQkFMRztBQU1WQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCxnUkFGUTtBQUdWQyxXQUFLLEVBQUUsTUFIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5GLEdBM0NEO0FBeURYQyxVQUFRLEVBQUU7QUFDUlYsUUFBSSxFQUFFLGNBREU7QUFFUkMsTUFBRSxFQUFFLFVBRkk7QUFHUkMsT0FBRyxFQUFFLFVBSEc7QUFJUkMsU0FBSyxFQUFFLElBSkM7QUFLUkMsU0FBSyxFQUFFLGtCQUxDO0FBTVJDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULG9wQkFGUTtBQUdWQyxXQUFLLEVBQUUsTUFIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBekRDO0FBdUVYRSxVQUFRLEVBQUU7QUFDUlgsUUFBSSxFQUFFLG1CQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSxrQkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCxrU0FGUTtBQUdWQyxXQUFLLEVBQUUsU0FIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBdkVDO0FBcUZYRyxVQUFRLEVBQUU7QUFDUlosUUFBSSxFQUFFLG1CQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSx1QkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCw2Y0FGUTtBQUdWQyxXQUFLLEVBQUUsV0FIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBckZDO0FBbUdYSSxVQUFRLEVBQUU7QUFDUmIsUUFBSSxFQUFFLGNBREU7QUFFUkMsTUFBRSxFQUFFLFVBRkk7QUFHUkMsT0FBRyxFQUFFLFVBSEc7QUFJUkMsU0FBSyxFQUFFLElBSkM7QUFLUkMsU0FBSyxFQUFFLGtCQUxDO0FBTVJDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULGtXQUZRO0FBR1ZDLFdBQUssRUFBRSxPQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTkosR0FuR0M7QUFpSFhLLFVBQVEsRUFBRTtBQUNSZCxRQUFJLEVBQUUsZ0JBREU7QUFFUkMsTUFBRSxFQUFFLFVBRkk7QUFHUkMsT0FBRyxFQUFFLFVBSEc7QUFJUkMsU0FBSyxFQUFFLElBSkM7QUFLUkMsU0FBSyxFQUFFLG9CQUxDO0FBTVJDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULDhUQUZRO0FBR1ZDLFdBQUssRUFBRSxNQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTko7QUFqSEMsQ0FBYjtBQWlJZVYsbUVBQWYiLCJmaWxlIjoiLi9kYXRhYmFzZS9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YSA9IHtcbiAgXCIyemQzM2I4Y1wiOiB7XG4gICAgbmFtZTogXCJNYWx1bWEgSGFzcyBBdm9jYWRvXCIsXG4gICAgaWQ6IFwiMnpkMzNiOGNcIixcbiAgICBza3U6IFwiTlVSNzJLQ01cIixcbiAgICBwcmljZTogMS4xNSxcbiAgICBpbWFnZTogXCIvaW1hZ2VzL21hbHVtYS5qcGdcIixcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJBIHJlbGF0aXZlbHkgbmV3IGN1bHRpdmFyLCBpdCB3YXMsIHRoZSBwcmV0dHkgYm95IGJhYnksIGRpc2NvdmVyZWQgaW4gU291dGggQWZyaWNhIGluIHRoZSBlYXJseSAxOTkwcyBieSBNci4gQS5HLiAoRHJpZXMpIEpvdWJlcnQuIE1hbHVtYSBCYWJ5eS4gSXQgaXMgYSBjaGFuY2Ugc2VlZGxpbmcgb2YgdW5rbm93biBwYXJlbnRhZ2VcIixcbiAgICAgIHNoYXBlOiBcIk92YWxcIixcbiAgICAgIGhhcmRpbmVzczogXCIxIMKwQ1wiLFxuICAgICAgdGFzdGU6IFwiQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvXCIsXG4gICAgfSxcbiAgfSxcbiAgXCI2dHJmZ2tralwiOiB7XG4gICAgbmFtZTogXCJGdWVydGUgQXZvY2Fkb1wiLFxuICAgIGlkOiBcIjZ0cmZna2tqXCIsXG4gICAgc2t1OiBcIkFYNE04U0pWXCIsXG4gICAgcHJpY2U6IDEuMjEsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9mdWVydGUuanBnXCIsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlIEZ1ZXJ0ZSBhdm9jYWRvIGlzIHRoZSBzZWNvbmQgbGFyZ2VzdCBjb21tZXJjaWFsIHZhcmlldHkgYmVoaW5kIEhhc3MuIEl0IGlzIGEgbG9uZyB0aW1lIENhbGlmb3JuaWEgY29tbWVyY2lhbCB2YXJpZXR5IHZhbHVlZCBmb3IgaXRzIHdpbnRlciBzZWFzb24gcmlwZW5pbmcgYW5kIGl0cyBCLVR5cGUgYmxvc3NvbSB0eXBlIHdoaWNoIG1vc3QgZ3Jvd2VycyBwbGFudCBhZGphY2VudCB0byB0aGUgSGFzcyBmb3IgYSBtb3JlIGNvbnNpc3RlbnQgcHJvZHVjdGlvbiBjeWNsZS4gVGhpcyBhdm9jYWRvIHRlbmRzIHRvIHByb2R1Y2UgaGVhdmlseSBpbiBhbHRlcm5hdGUgeWVhcnMuXCIsXG4gICAgICBzaGFwZTogXCJQZWFyXCIsXG4gICAgICBoYXJkaW5lc3M6IFwiLTEgwrBDXCIsXG4gICAgICB0YXN0ZTogXCJNYWduaWZpY2VudCwgaXMgYSBzdHJvbmcgYXZvY2Fkb1wiLFxuICAgIH0sXG4gIH0sXG4gIFwiN2JjcjQ5ZW1cIjoge1xuICAgIG5hbWU6IFwiR3dlbiBIYXNzIEF2b2NhZG9cIixcbiAgICBpZDogXCI3YmNyNDllbVwiLFxuICAgIHNrdTogXCJIWUE3OEY2SlwiLFxuICAgIHByaWNlOiAxLjI1LFxuICAgIGltYWdlOiBcIi9pbWFnZXMvZ3dlbi5qcGdcIixcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJBIHNlZWRsaW5nIGJyZWQgZnJvbSAnSGFzcycgeCAnVGhpbGxlJyBpbiAxOTgyLCAnR3dlbicgaXMgaGlnaGVyIHlpZWxkaW5nIGFuZCBtb3JlIGR3YXJmaW5nIHRoYW4gJ0hhc3MnIGluIENhbGlmb3JuaWEuIFRoZSBmcnVpdCBoYXMgYW4gb3ZhbCBzaGFwZSwgc2xpZ2h0bHkgc21hbGxlciB0aGFuICdIYXNzJyAoMTAw4oCTMjAwIGcgb3IgMy414oCTNy4xIG96KSwgd2l0aCBhIHJpY2gsIG51dHR5IGZsYXZvci4gVGhlIHNraW4gdGV4dHVyZSBpcyBtb3JlIGZpbmVseSBwZWJibGVkIHRoYW4gJ0hhc3MnLCBhbmQgaXMgZHVsbCBncmVlbiB3aGVuIHJpcGUuIEl0IGlzIGZyb3N0LWhhcmR5IGRvd24gdG8g4oiSMSDCsEMgKDMwIMKwRilcIixcbiAgICAgIHNoYXBlOiBcIlBsdW1wXCIsXG4gICAgICBoYXJkaW5lc3M6IFwi4oiSMSDCsENcIixcbiAgICAgIHRhc3RlOiBcIlN1cGVyYiwgaXMgYW4gYXZvY2Fkb1wiLFxuICAgIH0sXG4gIH0sXG4gIFwiMDk4MzIza3NcIjoge1xuICAgIG5hbWU6IFwiQmFjb24gQXZvY2Fkb1wiLFxuICAgIGlkOiBcIjA5ODMyM2tzXCIsXG4gICAgc2t1OiBcIkJYRDEwMEJMS1wiLFxuICAgIHByaWNlOiAxLjUxLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvYmFjb24uanBnXCIsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiRGV2ZWxvcGVkIGJ5IGEgZmFybWVyLCBKYW1lcyBCYWNvbiwgaW4gMTk1NCwgQmFjb24gaGFzIG1lZGl1bS1zaXplZCBmcnVpdCB3aXRoIHNtb290aCwgZ3JlZW4gc2tpbiB3aXRoIHllbGxvdy1ncmVlbiwgbGlnaHQtdGFzdGluZyBmbGVzaC4gV2hlbiByaXBlLCB0aGUgc2tpbiByZW1haW5zIGdyZWVuLCBidXQgZGFya2VucyBzbGlnaHRseSwgYW5kIGZydWl0IHlpZWxkcyB0byBnZW50bGUgcHJlc3N1cmUuIEl0IGlzIGNvbGQtaGFyZHkgZG93biB0byDiiJI1IMKwQyAoMjMgwrBGKVwiLFxuICAgICAgc2hhcGU6IFwiT3ZhbFwiLFxuICAgICAgaGFyZGluZXNzOiBcIuKIkjUgwrBDXCIsXG4gICAgICB0YXN0ZTogXCJDcmVhbXksIGlzIGFuIGF2b2NhZG9cIixcbiAgICB9LFxuICB9LFxuICBiOHV0aGUyeToge1xuICAgIG5hbWU6IFwiSGFzcyBBdm9jYWRvXCIsXG4gICAgaWQ6IFwiYjh1dGhlMnlcIixcbiAgICBza3U6IFwiUk1SQ1pON0VcIixcbiAgICBwcmljZTogMS4zOSxcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2hhc3MuanBnXCIsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlICdIYXNzJyBpcyB0aGUgbW9zdCBjb21tb24gY3VsdGl2YXIgb2YgYXZvY2Fkby4gSXQgcHJvZHVjZXMgZnJ1aXQgeWVhci1yb3VuZCBhbmQgYWNjb3VudHMgZm9yIDgwJSBvZiBjdWx0aXZhdGVkIGF2b2NhZG9zIGluIHRoZSB3b3JsZC5bMjFdWzU1XSBBbGwgJ0hhc3MnIHRyZWVzIGFyZSBkZXNjZW5kZWQgZnJvbSBhIHNpbmdsZSAnbW90aGVyIHRyZWUnIHJhaXNlZCBieSBhIG1haWwgY2FycmllciBuYW1lZCBSdWRvbHBoIEhhc3MsIG9mIExhIEhhYnJhIEhlaWdodHMsIENhbGlmb3JuaWEuWzIwXVs1NV0gSGFzcyBwYXRlbnRlZCB0aGUgcHJvZHVjdGl2ZSB0cmVlIGluIDE5MzUuIFRoZSAnbW90aGVyIHRyZWUnLCBvZiB1bmNlcnRhaW4gc3Vic3BlY2llcywgZGllZCBvZiByb290IHJvdCBhbmQgd2FzIGN1dCBkb3duIGluIFNlcHRlbWJlciAyMDAyLlsyMV1bNTVdWzU2XSAnSGFzcycgdHJlZXMgaGF2ZSBtZWRpdW0tc2l6ZWQgKDE1MOKAkzI1MCBnIG9yIDUuM+KAkzguOCBveiksIG92YXRlIGZydWl0IHdpdGggYSBibGFjaywgcGViYmxlZCBza2luLiBUaGUgZmxlc2ggaGFzIGEgbnV0dHksIHJpY2ggZmxhdm9yIHdpdGggMTklIG9pbC4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlIGNhbiB3aXRoc3RhbmQgdGVtcGVyYXR1cmVzIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXG4gICAgICBzaGFwZTogXCJPdmFsXCIsXG4gICAgICBoYXJkaW5lc3M6IFwi4oiSMSDCsENcIixcbiAgICAgIHRhc3RlOiBcIkdvcmdlb3VzLCBpcyBhbiBhdm9jYWRvXCIsXG4gICAgfSxcbiAgfSxcbiAgZXd4c2Q2eGI6IHtcbiAgICBuYW1lOiBcIkxhbWIgSGFzcyBBdm9jYWRvXCIsXG4gICAgaWQ6IFwiZXd4c2Q2eGJcIixcbiAgICBza3U6IFwiTjU1MjI5WkFcIixcbiAgICBwcmljZTogMS4zNCxcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xhbWIuanBnXCIsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlIExhbWIgSGFzcyBhdm9jYWRvIGlzIGEgY3Jvc3MgYmV0d2VlbiBhIEhhc3MgYW5kIEd3ZW4gYXZvY2Fkby4gVGhlIGZydWl0cyBhcmUgbGFyZ2VyIGluIHNpemUgYW5kIGxhdGVyIG1hdHVyaW5nIHRoYW4gSGFzcy4gSXQgaXMgZ2FpbmluZyBpbiBwb3B1bGFyaXR5IGFzIGEgY29tbWVyY2lhbCBhbmQgYmFja3lhcmQgdmFyaWV0eSBkdWUgdG8gaXRzIGV4Y2VwdGlvbmFsIGZsYXZvciBhbmQgZWFzeSBwZWVsaW5nIHF1YWxpdGllcy4gVGhlIHRyZWUgaGFzIGFuIHVwcmlnaHQsIGNvbXBhY3QgaGFiaXQuXCIsXG4gICAgICBzaGFwZTogXCJPYm92YXRlXCIsXG4gICAgICBoYXJkaW5lc3M6IFwiLTIgwrBDXCIsXG4gICAgICB0YXN0ZTogXCJHcmVhdCwgaXMgYW4gYXZvY2Fkb1wiLFxuICAgIH0sXG4gIH0sXG4gIGZwcjcybTlrOiB7XG4gICAgbmFtZTogXCJQaW5rZXJ0b24gQXZvY2Fkb1wiLFxuICAgIGlkOiBcImZwcjcybTlrXCIsXG4gICAgc2t1OiBcIkI0SFo0MlRNXCIsXG4gICAgcHJpY2U6IDEuMjcsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9waW5rZXJ0b24uanBnXCIsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiRmlyc3QgZ3Jvd24gb24gdGhlIFBpbmtlcnRvbiBSYW5jaCBpbiBTYXRpY295LCBDYWxpZm9ybmlhLCBpbiB0aGUgZWFybHkgMTk3MHMsICdQaW5rZXJ0b24nIGlzIGEgc2VlZGxpbmcgb2YgJ0hhc3MnIHggJ1JpbmNvbicuIFRoZSBsYXJnZSBmcnVpdCBoYXMgYSBzbWFsbCBzZWVkLCBhbmQgaXRzIGdyZWVuIHNraW4gZGVlcGVucyBpbiBjb2xvciBhcyBpdCByaXBlbnMuIFRoZSB0aGljayBmbGVzaCBoYXMgYSBzbW9vdGgsIGNyZWFteSB0ZXh0dXJlLCBwYWxlIGdyZWVuIGNvbG9yLCBnb29kIGZsYXZvciwgYW5kIGhpZ2ggb2lsIGNvbnRlbnQuIEl0IHNob3dzIHNvbWUgY29sZCB0b2xlcmFuY2UsIHRvIOKIkjEgwrBDICgzMCDCsEYpIGFuZCBiZWFycyBjb25zaXN0ZW50bHkgaGVhdnkgY3JvcHMuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSwgaXQgaGFzIGV4Y2VsbGVudCBwZWVsaW5nIGNoYXJhY3RlcmlzdGljc1wiLFxuICAgICAgc2hhcGU6IFwiTG9uZyBwZWFyXCIsXG4gICAgICBoYXJkaW5lc3M6IFwi4oiSMSDCsENcIixcbiAgICAgIHRhc3RlOiBcIk1hcnZlbG91cywgaXMgYW4gYXZvY2Fkb1wiLFxuICAgIH0sXG4gIH0sXG4gIHQ5ZHYyNWdzOiB7XG4gICAgbmFtZTogXCJSZWVkIEF2b2NhZG9cIixcbiAgICBpZDogXCJ0OWR2MjVnc1wiLFxuICAgIHNrdTogXCJaWTNUOVhYQ1wiLFxuICAgIHByaWNlOiAxLjE4LFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmVlZC5qcGdcIixcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJEZXZlbG9wZWQgZnJvbSBhIGNoYW5jZSBzZWVkbGluZyBmb3VuZCBpbiAxOTQ4IGJ5IEphbWVzIFMuIFJlZWQgaW4gQ2FsaWZvcm5pYSwgdGhpcyBjdWx0aXZhciBoYXMgbGFyZ2UsIHJvdW5kLCBncmVlbiBmcnVpdCB3aXRoIGEgc21vb3RoIHRleHR1cmUgYW5kIGRhcmssIHRoaWNrLCBnbG9zc3kgc2tpbi4gU21vb3RoIGFuZCBkZWxpY2F0ZSwgdGhlIGZsZXNoIGhhcyBhIHNsaWdodGx5IG51dHR5IGZsYXZvci4gVGhlIHNraW4gcmlwZW5zIGdyZWVuLiBBIEd1YXRlbWFsYW4gdHlwZSwgaXQgaXMgaGFyZHkgdG8g4oiSMSDCsEMgKDMwIMKwRikuIFRyZWUgc2l6ZSBpcyBhYm91dCA1IGJ5IDQgbSAoMTYuNCBieSAxMy4xIGZ0KVwiLFxuICAgICAgc2hhcGU6IFwiUm91bmRcIixcbiAgICAgIGhhcmRpbmVzczogXCLiiJIxIMKwQ1wiLFxuICAgICAgdGFzdGU6IFwiRXhxdWlzaXRlLCBpcyBhbiBhdm9jYWRvXCIsXG4gICAgfSxcbiAgfSxcbiAgdDM0NXc0OHk6IHtcbiAgICBuYW1lOiBcIlp1dGFubyBBdm9jYWRvXCIsXG4gICAgaWQ6IFwidDM0NXc0OHlcIixcbiAgICBza3U6IFwiTVc3OVpaNllcIixcbiAgICBwcmljZTogMS4yNSxcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3p1dGFuby5qcGdcIixcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUaGUgWnV0YW5vIGF2b2NhZG8gaXMgYSBjb2xkIGhhcmR5LCBjb25zaXN0ZW50IHByb2R1Y2luZyBhdm9jYWRvIHZhcmlldHkuIEl0IHJlc2VtYmxlcyB0aGUgRnVlcnRlIGluIGFwcGVhcmFuY2UgYnV0IGlzIGxlc3MgZmxhdm9yZnVsIGJ1dCBtb3JlIGNvbGQgaGFyZHkuIFRoZSBncmVlbiBmcnVpdHMgYXJlIG9ib3ZhdGUgaW4gc2hhcGUgd2l0aCB3YXh5IGJ1bXBzIG9uIHRoZSBza2luLiBUaGUgZmxlc2ggaGFzIGEgbG93IG9pbCBidXQgaGlnaCB3YXRlciBjb250ZW50IHdoaWNoIGNhdXNlcyBpdCB0byBoYXZlIGEgbW9yZSBmaWJyb3VzIHRleHR1cmUuXCIsXG4gICAgICBzaGFwZTogXCJQZWFyXCIsXG4gICAgICBoYXJkaW5lc3M6IFwiLTUgwrBDXCIsXG4gICAgICB0YXN0ZTogXCJTcGxlbmRpZCwgaXMgYW4gYXZvY2Fkb1wiLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/data.js\n");

/***/ }),

/***/ "./database/db_helper.js":
/*!*******************************!*\
  !*** ./database/db_helper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./database/data.js\");\n\n\nclass Database {\n  constructor() {}\n\n  getAll() {\n    return new Promise(async (resolve, reject) => {\n      try {\n        const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        console.log(\"allDATA:\", asArray);\n        await randomDelay();\n        resolve(asArray);\n      } catch (error) {\n        reject(error);\n      }\n    });\n  }\n\n  getById(id) {\n    return new Promise(async (resolve, reject) => {\n      try {\n        const avocade = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).find(avocade => avocade.id === id);\n        await randomDelay();\n        resolve(avocade);\n      } catch (error) {\n        reject(error);\n      }\n    });\n  }\n\n}\n\nconst randomDelay = () => new Promise(resolve => {\n  const max = 350;\n  const min = 100;\n  const delay = Math.floor(Math.random() * (max - min + 1)) + min;\n  setTimeout(resolve, delay);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Database);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYl9oZWxwZXIuanM/MDAwYSJdLCJuYW1lcyI6WyJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiYWxsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21EZWxheSIsImVycm9yIiwiZ2V0QnlJZCIsImlkIiwiYXZvY2FkZSIsImZpbmQiLCJtYXgiLCJtaW4iLCJkZWxheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxRQUFOLENBQWU7QUFDYkMsYUFBVyxHQUFHLENBQUU7O0FBRWhCQyxRQUFNLEdBQUc7QUFDUCxXQUFPLElBQUlDLE9BQUosQ0FBWSxPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixLQUEyQjtBQUM1QyxVQUFJO0FBQ0YsY0FBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsNkNBQWQsQ0FBaEI7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkwsT0FBeEI7QUFDQSxjQUFNTSxXQUFXLEVBQWpCO0FBQ0FSLGVBQU8sQ0FBQ0UsT0FBRCxDQUFQO0FBQ0QsT0FMRCxDQUtFLE9BQU9PLEtBQVAsRUFBYztBQUNkUixjQUFNLENBQUNRLEtBQUQsQ0FBTjtBQUNEO0FBQ0YsS0FUTSxDQUFQO0FBVUQ7O0FBRURDLFNBQU8sQ0FBQ0MsRUFBRCxFQUFLO0FBQ1YsV0FBTyxJQUFJWixPQUFKLENBQVksT0FBT0MsT0FBUCxFQUFnQkMsTUFBaEIsS0FBMkI7QUFDNUMsVUFBSTtBQUNGLGNBQU1XLE9BQU8sR0FBR1QsTUFBTSxDQUFDQyxNQUFQLENBQWNDLDZDQUFkLEVBQXVCUSxJQUF2QixDQUNiRCxPQUFELElBQWFBLE9BQU8sQ0FBQ0QsRUFBUixLQUFlQSxFQURkLENBQWhCO0FBR0EsY0FBTUgsV0FBVyxFQUFqQjtBQUNBUixlQUFPLENBQUNZLE9BQUQsQ0FBUDtBQUNELE9BTkQsQ0FNRSxPQUFPSCxLQUFQLEVBQWM7QUFDZFIsY0FBTSxDQUFDUSxLQUFELENBQU47QUFDRDtBQUNGLEtBVk0sQ0FBUDtBQVdEOztBQTVCWTs7QUErQmYsTUFBTUQsV0FBVyxHQUFHLE1BQ2xCLElBQUlULE9BQUosQ0FBYUMsT0FBRCxJQUFhO0FBQ3ZCLFFBQU1jLEdBQUcsR0FBRyxHQUFaO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLEdBQVo7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJMLEdBQUcsR0FBR0MsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQTVEO0FBRUFLLFlBQVUsQ0FBQ3BCLE9BQUQsRUFBVWdCLEtBQVYsQ0FBVjtBQUNELENBTkQsQ0FERjs7QUFTZXBCLHVFQUFmIiwiZmlsZSI6Ii4vZGF0YWJhc2UvZGJfaGVscGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFsbERhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG5jbGFzcyBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbERBVEE6XCIsIGFzQXJyYXkpO1xuICAgICAgICBhd2FpdCByYW5kb21EZWxheSgpO1xuICAgICAgICByZXNvbHZlKGFzQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXZvY2FkZSA9IE9iamVjdC52YWx1ZXMoYWxsRGF0YSkuZmluZChcbiAgICAgICAgICAoYXZvY2FkZSkgPT4gYXZvY2FkZS5pZCA9PT0gaWRcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgcmFuZG9tRGVsYXkoKTtcbiAgICAgICAgcmVzb2x2ZShhdm9jYWRlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgcmFuZG9tRGVsYXkgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG1heCA9IDM1MDtcbiAgICBjb25zdCBtaW4gPSAxMDA7XG4gICAgY29uc3QgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSk7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/db_helper.js\n");

/***/ }),

/***/ "./pages/api/avo/[id].js":
/*!*******************************!*\
  !*** ./pages/api/avo/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database_db_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/db_helper */ \"./database/db_helper.js\");\n\n\nconst getAvoById = async (req, resp) => {\n  const DB = new _database_db_helper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const {\n    id\n  } = req.query;\n  const entry = await DB.getById(id);\n  resp.status(200).json(entry);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAvoById);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvLy5qcz9lOThhIl0sIm5hbWVzIjpbImdldEF2b0J5SWQiLCJyZXEiLCJyZXNwIiwiREIiLCJEYXRhYmFzZSIsImlkIiwicXVlcnkiLCJlbnRyeSIsImdldEJ5SWQiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsSUFBWixLQUFxQjtBQUN0QyxRQUFNQyxFQUFFLEdBQUcsSUFBSUMsMkRBQUosRUFBWDtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFTSixHQUFHLENBQUNLLEtBQW5CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1KLEVBQUUsQ0FBQ0ssT0FBSCxDQUFXSCxFQUFYLENBQXBCO0FBQ0FILE1BQUksQ0FBQ08sTUFBTCxDQUFZLEdBQVosRUFBaUJDLElBQWpCLENBQXNCSCxLQUF0QjtBQUNELENBTEQ7O0FBT2VQLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F2by9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZS9kYl9oZWxwZXJcIjtcblxuY29uc3QgZ2V0QXZvQnlJZCA9IGFzeW5jIChyZXEsIHJlc3ApID0+IHtcbiAgY29uc3QgREIgPSBuZXcgRGF0YWJhc2UoKTtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuICBjb25zdCBlbnRyeSA9IGF3YWl0IERCLmdldEJ5SWQoaWQpO1xuICByZXNwLnN0YXR1cygyMDApLmpzb24oZW50cnkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXZvQnlJZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/avo/[id].js\n");

/***/ })

/******/ });