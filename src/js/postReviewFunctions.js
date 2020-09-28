import axios from "axios"

let postReview = {
    createReviewId(reviewList) {
        let highestId = 0;

        for(let i = 0; i < reviewList.length; i++) {
            if(reviewList[i].reviewId > highestId) {
                highestId = reviewList[i].reviewId;
            }
        }

        let newId = highestId + 1;
        return newId;
    },
    findEventToUpdate(events, eventId) {
        console.log(eventId);
        for (let i = 0; i < events.length; i++) {
            if (eventId === events[i].eventId) {
                console.log('hej' + i);
                return i;
            }
        }
    },
    post(review) {
        const getUrl = 'https://api.jsonbin.io/b/5f6dedf2302a837e956d798a'; // request URL
        const token = '$2b$10$yK7Wd8VYpPBMMgz591x2WeUPqba/X66/n0vsSS7AQsXM90RmkyS.a'; // access token
        let data;

        axios.get(getUrl, {
            headers: {
                "secret-key": token,
            },
        }).then(res => {
            data = res.data;

            let newDataObject = data; 
            let reviewList = data.reviews;
            let eventId = parseInt(review.eventId);
            let eventToUpdate = this.findEventToUpdate(data.events, eventId);    
            let reviewId = this.createReviewId(reviewList);       
            let newReview = {
                reviewId: reviewId,
                userId: parseInt(review.userId),
                rating: parseInt(review.rating),
                review: review.review
            }
    
            newDataObject.events[eventToUpdate].reviews.push(reviewId);
            newDataObject.reviews.push(newReview);
    
            console.log(newDataObject);    
        })
    }
}

export default postReview;
