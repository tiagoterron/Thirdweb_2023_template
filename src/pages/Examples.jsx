import React, { useState, Component } from 'react'
import { Placeholder, Button, Grid, Popup, Input } from 'semantic-ui-react'
import { Accordion, Form, Segment, Dropdown, Confirm } from 'semantic-ui-react'

class ConfirmExampleCallbacks extends Component {
  state = { open: false, result: 'show the modal to capture a result' }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ result: 'confirmed', open: false })
  handleCancel = () => this.setState({ result: 'cancelled', open: false })
  
  render() {
    const { open, result } = this.state
    console.log(result)
    return (
      <div>
        <p>
          Result: <em>{result}</em>
        </p>

        <Button onClick={this.show}>Show</Button>
        <Confirm
          open={open}
          header='This is a custom header'
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          cancelButton='Never mind'
          confirmButton="Let's do it"
        />
      </div>
    )
  }
}

const Examples = () => {

    const [Open, setOpen] = useState(false);
    const panels = [
        {
          key: 'details',
          title: 'Optional Details',
          content: {
            as: Form.Input,
            label: 'Maiden Name',
            placeholder: 'Maiden Name',
          },
        },
      ]

      const options = [
        { key: 'angular', text: 'Angular', value: 'angular' },
        { key: 'css', text: 'CSS', value: 'css' },
        { key: 'design', text: 'Graphic Design', value: 'design' },
        { key: 'ember', text: 'Ember', value: 'ember' },
        { key: 'html', text: 'HTML', value: 'html' },
        { key: 'ia', text: 'Information Architecture', value: 'ia' },
        { key: 'javascript', text: 'Javascript', value: 'javascript' },
        { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
        { key: 'meteor', text: 'Meteor', value: 'meteor' },
        { key: 'node', text: 'NodeJS', value: 'node' },
        { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
        { key: 'python', text: 'Python', value: 'python' },
        { key: 'rails', text: 'Rails', value: 'rails' },
        { key: 'react', text: 'React', value: 'react' },
        { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
        { key: 'ruby', text: 'Ruby', value: 'ruby' },
        { key: 'ui', text: 'UI Design', value: 'ui' },
        { key: 'ux', text: 'User Experience', value: 'ux' },
      ]

      const friendOptions = [
        {
          key: 'GRW',
          text: 'GRW',
          value: 'GRW',
          image: { avatar: true, src: 'https://ducoinexchange.com/assets/grw.9897d069.png' },
        },
        {
          key: 'DUC',
          text: 'DUC',
          value: 'DUC',
          image: { avatar: true, src: 'https://ducoinexchange.com/assets/duc.aabf8264.png' },
        },
        {
          key: 'DMK',
          text: 'DMK',
          value: 'DMK',
          image: { avatar: true, src: 'https://i.ibb.co/hfx8jn4/dmk.png' },
        },
        {
          key: 'GUSD',
          text: 'GUSD',
          value: 'GUSD',
          image: { avatar: true, src: 'https://ducoinexchange.com/assets/gusd.d3d67123.png' },
        }
      ]


    return(
        

    <div className="grid grid-cols-3 gap-10">

    <Popup wide trigger={<Button content='Are you the one?' />} on='click'>
      <Grid divided columns='equal'>
        <Grid.Column>
          <Popup
            trigger={<Button color='blue' content='Blue Pill' fluid />}
            content='The story ends. You wake up in your bed and believe whatever you want to believe.'
            position='top center'
            size='tiny'
            inverted
            />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={<Button color='red' content='Red Pill' fluid />}
            content='Stay in Wonderland, and I show you how deep the rabbit hole goes.'
            position='top center'
            size='tiny'
            inverted
            />
        </Grid.Column>
      </Grid>
    </Popup>

    <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line  />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>

  <Segment>
    <Form>
      <Form.Group widths={2}>
        <Form.Input label='First Name' placeholder='First Name' />
        <Form.Input label='Last Name' placeholder='Last Name' />
      </Form.Group>
      <Accordion as={Form.Field} panels={panels}  />

      <Button secondary>Sign Up</Button>
    </Form>
  </Segment>

  <Dropdown placeholder='Skills'  className="h-fit" fluid multiple selection options={options} />
        
  <Dropdown
      placeholder='I close on blur'
      closeOnBlur
      selection
      className="h-fit"
      options={friendOptions}
    />
    

    <Grid columns={1}>
    <Grid.Column>
      <Popup
        trigger={<Button icon='add' content='Add a friend' />}
        content='Sends an email invite to a friend.'
        on='hover'
      />
      <Popup
        trigger={
          <Button color='red' icon='flask' content='Activate doomsday device' />
        }
        content={<Button color='green' content='Confirm the launch' />}
        on='click'
        position='top right'
      />
      <Popup
        trigger={<Input icon='search' placeholder='Search...' />}
        header='Movie Search'
        content='You may search by genre, header, year and actors'
        on='focus'
      />
    </Grid.Column>
    <Grid.Column>
      <Popup
        trigger={<Button>Click me or Hover me</Button>}
        header='Movie Search'
        content='Multiple events can trigger a popup'
        on={['hover', 'click']}
      />
    </Grid.Column>
  </Grid>


  <div>
        <ConfirmExampleCallbacks />
      </div>


</div>
      )
    }

export default Examples