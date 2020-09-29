import axios from "axios";
import store from '../store';

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
        const getUrl = 'https://api.jsonbin.io/b/5f733b1d65b18913fc5624cb';
        const token = '$2b$10$yK7Wd8VYpPBMMgz591x2WeUPqba/X66/n0vsSS7AQsXM90RmkyS.a';
        let data;
        
        return axios.get(getUrl, {
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
            
            return axios.put(getUrl, newDataObject, {
                headers: {
                    "secret-key": token,
                    "versioning": false
                },
            })
        })
        .then(req => {
            console.log(req);
            if(req.data.success) {
                store.dispatch('getData');
                return { success: true }
            } else {
                return { success: false }
            }
        })
        .catch(error => console.log(error))
    }
}

export default postReview;
