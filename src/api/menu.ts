// 菜单
import request from '@/utils/request'
export const createMenu = (data: object) => {
  return request({
    method: 'POST',
    url: '/boss/menu/saveOrUpdate',
    data,
  })
}
export const getList = () => {
  return request({
    method: 'GET',
    url: '/boss/menu/getAll',
  })
}
export const getEditMenuInfo = (id = -1) => {
  return request({
    method: 'GET',
    url: '/boss/menu/getEditMenuInfo',
    params: {
      id
    }
  })
}
export const deleteMenu = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/boss/menu/${id}`,
  })
}
export const getMenu = (id: number | string) => {
  return request({
    method: 'GET',
    url: `/boss/menu/${id}`,
  })
}
export const getAllMenuLevel = () => {
  return request({
    method: 'GET',
    url: '/boss/menu/getMenuNodeList',
  })
}
export const allocateMenu = (data: object) => {
  return request({
    method: 'POST',
    url: '/boss/menu/allocateRoleMenus',
    data,
  })
}
export const getRoleMenu = (roleId: string | number) => {
  return request({
    method: 'GET',
    url: '/boss/menu/getRoleMenus',
    params: {
      roleId
    }
  })
}
