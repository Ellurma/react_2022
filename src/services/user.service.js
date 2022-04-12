import {axiosService} from "./axious.service";
import {urls} from '../configs/urls'

export const userService={
    getAll:()=>axiosService.get(urls.users)

}