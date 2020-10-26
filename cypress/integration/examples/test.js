import homePage from '../../pageObjects/homePage'
var home = new homePage();
var i = 0;
context('Homework', () => {
    beforeEach(() => {

        home.visit('http://the-internet.herokuapp.com/dynamic_content')
    })
/*
    it('Write a test where you find the longest word in the lorem ipsum and will fail if there is a duplicate of that word anywhere on that page.', () => {

        home.loremIpsum()
    })
    it('Write a test that fails if there are two or more images that are the same', () => {

        home.images('compare')
    })
    */
for(i=0; i<11; i++){
    it('Write a test that will fail if an image contains Wolverine and the lorem ipsum next to it contains the word “magni”', () => {

        home.images('wolverine')

    })

}

/*
    it('Write a test that will refresh the page until it sees the Mario image 3 times. It fails if it did not see Mario 3 times in 5 refreshes.', () => {

        home.images('mario')

    }) */
})