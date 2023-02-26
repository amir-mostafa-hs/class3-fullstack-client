import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { createCourseApi } from "../API/courseApi";
import { useNavigate } from "react-router";

const CreateCoursePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    authorId: "",
    category: "",
    slug: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);
    await createCourseApi(formData);
    navigate("/course");

    setFormData({
      title: "",
      authorId: "",
      category: "",
      slug: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Course Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthorId">
        <Form.Label>Author Id</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Course Author Id"
          value={formData.authorId}
          onChange={(e) => setFormData({ ...formData, authorId: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Course Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSlug">
        <Form.Label>Slug</Form.Label>
        <Form.Control type="text" placeholder="Enter Course Slug" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateCoursePage;
