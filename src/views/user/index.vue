<template>
 <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <el-form :inline="true"
               :model="searchParams"
               class="demo-form-inline">
        <el-form-item label="手机号">
          <el-input v-model="searchParams.phone"
                    placeholder="填写手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list"
              class="list-table"
              style="width: 100%"
              v-loading="loading">
      <el-table-column prop="id"
                       label="用户id"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="头像"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="用户名">
      </el-table-column>
      <el-table-column prop="phone"
                       label="手机号">
      </el-table-column>
      <el-table-column prop="createdTime"
                       label="添加时间">
                       <template slot-scope="scope">
                         {{scope.row.createTime | formatDate}}
                       </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="allocateRoleDialog(scope.row.id)"
                     type="text"
                     size="small">分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="'分配角色'"
               :visible="show"
               width="400px"
               left>
      <el-form ref="form"
               :model="form"
               label-width="80px"
               class="form-style">
               <el-form-item>
        <el-select v-model="form.roleIdList" multiple placeholder="请选择">
          <el-option
            v-for="item in roleList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
               </el-form-item>
        <el-button type="default"
                   class="login-btn"
                   @click="show = false"
                   >取消</el-button>
        <el-button type="primary"
                   class="login-btn"
                   @click="allocateRole"
                   :loading="loading">保存</el-button>
      </el-form>
    </el-dialog>
  </el-card>
</template>
<script lang='ts'>
import Vue from 'vue'
import { getList } from '@/api/user'
import { getAllRole, allocateUserRoles, getUserRole } from '@/api/role'
import dayjs from 'dayjs'
export default Vue.extend({
  name: 'User',
  data () {
    return {
      dayjs: dayjs,
      loading: false,
      total: 0,
      list: [],
      roleList: [],
      show: false,
      searchParams: {
        phone: '',
        startCreateTime: '',
        code: '',
        endCreateTime: '',
        current: 1,
        size: 10,
      },
      form: {
        roleIdList: [],
        userId: ''
      }
    }
  },
  created () {
    this.getAllRole()
    this.getList(this.searchParams)
  },
  methods: {
    search () {
      this.getList(this.searchParams)
    },
    async getList (searchParams: object) {
      this.loading = true
      try {
        const res = await getList(searchParams)
        this.list = res.data.data.records
        this.total = res.data.data.total
      } catch (error) {
        this.$message.error(error.message)
      } finally {
        this.loading = false
      }
    },
    async allocateRole () {
      try {
        await allocateUserRoles(this.form)
        this.$message.success('分配成功')
        this.show = false
        this.getList(this.searchParams)
      } catch (error) {
        console.log(error)
      }
    },
    async getAllRole () {
      const { data } = await getAllRole()
      this.roleList = data.data
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allocateRoleDialog (id: any) {
      this.show = true
      this.form.userId = id
      this.getUserRole(id)
    },
    async getUserRole (userId: string|number) {
      const { data } = await getUserRole(userId)
      console.log(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.form.roleIdList = data.data.map((item: any) => item.id)
    }
  }
})
</script>
<style lang='scss' scoped>
</style>
