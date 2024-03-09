import { supabase } from "src/utils/supabaseClient";

export default async function handler(req, res) {
  const { id, musclePart, trainingMenu, count, date } = req.body;
  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, musclePart, trainingMenu, count, date }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json(data);
}
