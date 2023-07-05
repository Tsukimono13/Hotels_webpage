export const getReviewNumbers = (reviewsAmount: number) => {
    let reviewWord;
    if (reviewsAmount % 10 === 1 && reviewsAmount % 100 !== 11) {
        reviewWord = " отзыв";
    } else if (2 <= reviewsAmount % 10 && reviewsAmount % 10 <= 4
        && (reviewsAmount % 100 < 10 || reviewsAmount % 100 >= 20)) {
        reviewWord = " отзыва";
    } else {
        reviewWord = " отзывов";
    }
    return reviewsAmount + reviewWord;
}