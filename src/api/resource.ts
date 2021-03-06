// 菜单
import request from '@/utils/request'
export const createRes = (data: object) => {
  return request({
    method: 'POST',
    url: '/boss/resource/category/saveOrderUpdate',
    data,
  })
}
export const getList = (data: object) => {
  return request({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data
  })
}
export const getRes = (id: number | string) => {
  return request({
    method: 'GET',
    url: `/boss/resource/${id}`,
  })
}
export const deleteRes = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/boss/resource/${id}`,
  })
}

// 资源分类
export const getResTypeList = () => {
  return request({
    method: 'GET',
    url: '/boss/resource/category/getAll',
  })
}
export const createType = (data: object) => {
  return request({
    method: 'POST',
    url: '/boss/resource/category/saveOrderUpdate',
    data,
  })
}
export const deleteResType = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/boss/resource/category/${id}`,
  })
}
export const allocateRoleRes = (data: object) => {
  return request({
    method: 'POST',
    url: '/boss/resource/allocateRoleResources',
    data
  })
}
export const getRoleRes = (roleId: string | number) => {
  return request({
    method: 'GET',
    url: '/boss/resource/getRoleResources',
    params: {
      roleId
    }
  })
}
