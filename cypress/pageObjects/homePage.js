export default class homePage {

    visit() {
        cy.visit('http://the-internet.herokuapp.com/dynamic_content');
    }

    images(testOp) {
        const imageOne = '(//div[contains(@class,"large-2")])[1]/img'
        const imageTwo = '(//div[contains(@class,"large-2")])[2]/img'
        const imageThree = '(//div[contains(@class,"large-2")])[3]/img'
        const wolvImg = '/img/avatars/Original-Facebook-Geek-Profile-Avatar-5.jpg'
        const textBoxOne = '(//div[contains(@class,"large-10")])[2]'
        const textBoxTwo = '(//div[contains(@class,"large-10")])[3]'
        const textBoxThree = '(//div[contains(@class,"large-10")])[4]'
        const marioImg = '/img/avatars/Original-Facebook-Geek-Profile-Avatar-1.jpg'
        var i = 0;

        cy.xpath(imageOne).invoke('attr', 'src').then((firstSrc) => {
            const srcValue1 = firstSrc
            cy.xpath(imageTwo).invoke('attr', 'src').then((secondSrc) => {
                const srcValue2 = secondSrc
                cy.xpath(imageThree).invoke('attr', 'src').then((thirdSrc) => {
                    const srcValue3 = thirdSrc
                    let srcValueArray = [srcValue1, srcValue2, srcValue3]
                    if (testOp === 'compare') {
                        expect(srcValue1).to.not.equal(srcValue2)
                        expect(srcValue1).to.not.equal(srcValue3)
                        expect(srcValue2).to.not.equal(srcValue3)
                    }
                    else if (testOp === 'wolverine') {
                        for (i = 0; i < 3; i++) {
                            if (srcValueArray[i] === wolvImg) {

                                switch(i) {
                                    case 0:
                                        cy.xpath(textBoxOne).invoke('text').should('not.contain','magni', { matchCase: false })
                                    break; 
                                    case 1:
                                        cy.xpath(textBoxTwo).invoke('text').should('not.contain','magni', { matchCase: false })
                                    break; 
                                    case 2:
                                        cy.xpath(textBoxThree).invoke('text').should('not.contain','magni', { matchCase: false })
                                    break; 
                                    default:
                                      // code block
                                  }
                      
                                //expect(textBoxOne).to.not.have.text("magni")
                                //return textBoxOne
                            }
                        }
                    }
                    else if (testOp === 'mario') {
                        var marioSpottings = 0;
                        var refreshCounter = 0;
                        while (marioSpottings < 3 && refreshCounter < 5) {

                            for (i = 0; i < 3; i++) {
                                if (srcValueArray[i] === marioImg) {
                                    marioSpottings++;
                                    if (marioSpottings === 3) {
                                        expect(marioSpottings).to.equal(3)
                                    }
                                }
                            }
                            refreshCounter++;
                            if (refreshCounter === 5) {
                                throw new Error("test fails here")
                            }
                            cy.reload()
                        }
                    }
                });
            });
        });

    }
    loremIpsum() {
        cy.xpath('(//div[contains(@class,"large-10")])[1]').invoke('text').then((text) => {
            const textValue = text
            var str = textValue.split(" ");
            var longest = 0;
            var word = null;
            var dupe = 0;
            var numWords = 0;
            for (var i = 0; i < str.length; i++) {
                if (longest < str[i].length) {
                    longest = str[i].length;
                    word = str[i];
                }
                numWords++;
                expect(textValue).to.contain(word)
                //expect(word).to.equal(str[i])
            }
            if(str.length === numWords){

            
            for (var i = 0; i < str.length; i++) {
                if (word === str[i]) {
                    dupe++;
                    if (dupe >= 2) {
                        throw new Error("Duplicate Word")
                    }

                }
            }
            }
            //cy.contains(word).next('div').contains(word).should('exist')
            //cy.xpath('(//div[contains(@class,"large-10")])[1]').contains(word).should('have.length', 1)
        });
        
    }

}



        
        
    


