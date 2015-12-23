// to use methods from other files we simply use `require` with path name
var assert = require('assert');
var deter = require('../app.js')
//var sinon = require('sinon')

describe('Determind', function(){

	/* ----------------- gov_determindCostPlan ----------------- */
	describe('gov_determindCostPlan1', function(){
	    it('gov_determindCostPlan1', function(){
	      assert.equal(1, deter.gov_determindCostPlan(1));
	    })
	})

	describe('gov_determindCostPlan3', function(){
	    it('gov_determindCostPlan3', function(){
	      assert.equal(3, deter.gov_determindCostPlan(12));
	    })
	})

	describe('gov_determindCostPlan5', function(){
	    it('gov_determindCostPlan5', function(){
	      assert.equal(5, deter.gov_determindCostPlan(25));
	    })
	})

	/* ------------------- determindArea ------------------- */
	describe('determindArea_taipei', function(){
	    it('determindArea_taipei', function(){
	      assert.equal("taipei", deter.determindArea("新北市"));
	    })
	})

	describe('determindArea_other', function(){
	    it('determindArea_other', function(){
	      assert.equal("other", deter.determindArea("台中市"));
	    })
	})

	describe('determindArea_island', function(){
	    it('determindArea_island', function(){
	      assert.equal("island", deter.determindArea("澎湖縣"));
	    })
	})

	/* ------------------- cat_determindArea ------------------- */
	describe('cat_determindArea_taiwan', function(){
	    it('cat_determindArea_taiwan', function(){
	      assert.equal("taiwan", deter.cat_determindArea("新北市"));
	    })
	})

	describe('cat_determindArea_island', function(){
	    it('cat_determindArea_island', function(){
	      assert.equal("island", deter.cat_determindArea("澎湖縣"));
	    })
	})

	describe('cat_determindArea_invalid', function(){
	    it('cat_determindArea_invalid', function(){
	      assert.equal("invalid", deter.cat_determindArea("東引地區"));
	    })
	})

	/* ------------------- determindCostPlan ------------------- */
	describe('determindCostPlan1', function(){
	    it('determindCostPlan1', function(){
	      assert.equal(1, deter.determindCostPlan(45));
	    })
	})

	describe('determindCostPlan2', function(){
	    it('determindCostPlan2', function(){
	      assert.equal(2, deter.determindCostPlan(75));
	    })
	})

	describe('determindCostPlan3', function(){
	    it('determindCostPlan3', function(){
	      assert.equal(3, deter.determindCostPlan(115));
	    })
	})

	describe('determindCostPlan4', function(){
	    it('determindCostPlan4', function(){
	      assert.equal(4, deter.determindCostPlan(135));
	    })
	})

	/* ------------------- hct_determindArea ------------------- */
	describe('hct_determindArea_taiwan', function(){
	    it('hct_determindArea_taiwan', function(){
	      assert.equal("taiwan", deter.hct_determindArea("新北市"));
	    })
	})

	describe('hct_determindArea_island', function(){
	    it('hct_determindArea_island', function(){
	      assert.equal("island", deter.hct_determindArea("澎湖縣"));
	    })
	})

	describe('hct_determindArea_invalid', function(){
	    it('hct_determindArea_invalid', function(){
	      assert.equal("invalid", deter.hct_determindArea("馬祖地區"));
	    })
	})

})