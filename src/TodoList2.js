import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List, Typography } from 'antd'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

class TodoList extends Component {
  render() {
    return (
      <div style={{margin: '10px'}}>
        <Input placeholder='todo info' style={{ width: '300px', margin: '10px'}}></Input>
        <Button type='primary'>Search</Button>
        <List 
              style={{margin: '10px', width: '300px'}} 
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}/>
      </div>
    )
  }
}

export default TodoList