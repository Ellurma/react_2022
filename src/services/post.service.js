import {axiosService} from "./axious.service";
import {urls} from '../configs/urls'

export const postService={
    getPostByUserId:(userId)=>axiosService.get(`${urls.posts}?userId=${userId}`)
}