import { ApodApiData } from '@/app/shared/models/pictureModels';
import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.NASA_API_KEY;

export async function GET(req: NextRequest) {
	const startDate = req.nextUrl.searchParams.get('start_date');
	const endDate = req.nextUrl.searchParams.get('end_date');

	let baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true`;

	if (startDate && endDate) {
		baseUrl = `${baseUrl}&start_date=${startDate}&end_date=${endDate}`;
	}

	try {
		const res = await fetch(baseUrl);
		const data: ApodApiData = await res.json();

		if (!res.ok) {
			const errorMessage = 'msg' in data ? data.msg : 'Unknown API error';
			return NextResponse.json({ error: errorMessage }, { status: res.status });
		}

		return NextResponse.json(data);
	} catch (e: any) {
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}
