// 处理企业微信 URL 验证（GET 请求）
export async function onRequestGet(context) {
  const { searchParams } = new URL(context.request.url);
  const echostr = searchParams.get('echostr');
  return new Response(echostr, {
    status: 200,
    headers: { 'Content-Type': 'text/plain' }
  });
}

// 处理企业微信消息推送（POST 请求）
export async function onRequestPost(context) {
  const body = await context.request.text();
  console.log('收到企业微信消息：', body);
  // 必须返回 success，否则企业微信会重复推送
  return new Response('success', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' }
  });
}
