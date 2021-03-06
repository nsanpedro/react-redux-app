import React from 'react';
import textInput from '../common/textInput';
import selectInput from '../common/selectInput';

const CourseForm = ({course,allAuthors,onSave,onChange,saving,errors}) =>{
  return (
    <form>
      <h1>Manage Course </h1>
      <TextInput
        name = "title"
        label = "Title"
        value = {course.title}
        onChange = {onChange}
        error = {errors.title}/>

      <SelectInput
        name = "authorId"
        label = "Author"
        value = {course.authorId}
        options = {allAuthors}
        onChange = {onChange}
        defaultOption = "Select Author"
        error = {errors.authorId}/>

      <TextInput
        name = "category"
        label = "Category"
        value = {course.category}
        onChange = {onChange}
        error = {errors.category}/>

      <TextInput
        name = "length"
        label = "Length"
        value = {course.length}
        onChange = {onChange}
        error = {errors.length}/>

      <input
          type = "submit"
          disabled = {saving}
          value = {saving ? 'Saving...':'Save'}
          className = "btn btn-primary"
          onClick = {onSave}/>
        </form>
  );
};

CourseForm.propTypes = {
  course:React.PropTypes.object.isRequired,
  allAuthors:React.PropTypes.array.isRequired,
  onSave:React.PropTypes.func.isRequired,
  onChange:React.PropTypes.func.isRequired,
  saving:React.PropTypes.bool,
  errors:React.PropTypes.object
};

export default CourseForm;