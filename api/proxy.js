export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    const imei = req.query.imei;
    if (!imei) return res.status(400).json({ error: 'IMEI required' });

    try {
        const url = 'https://prohexa.com/demo/damkar/viewobu/get_pos/' + encodeURIComponent(imei);
        const r = await fetch(url);
        const data = await r.json();
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}